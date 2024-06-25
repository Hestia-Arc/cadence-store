import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import notifyReducer from "./features/notification/notifySlice";



const reducers = combineReducers({
    notify: notifyReducer
});

const rootReducer = (state: any, action: { type: any; }) => {
  if (action.type === "users/logout/fulfilled") {
    state = undefined;
  }
  return reducers(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
export const persist = persistStore(store);



