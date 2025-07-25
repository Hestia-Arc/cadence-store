import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import notify from "./views/notification/notifySlice";
import products from "./views/product/productSlice";
import cart from "./views/cart/cartSlice";
import user from "./views/user/userSlice";




const reducers = combineReducers({
    notify,
    products,
    cart,
    user
});

type RootStateType = ReturnType<typeof reducers>;

const rootReducer = (state: RootStateType | undefined, action: { type: string }) => {
  if (action.type === "users/logout/fulfilled") {
    state = undefined;
  }
  return reducers(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ "auth", "notify", "cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
export const persist = persistStore(store);



