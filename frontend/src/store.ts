// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";



// const reducers = combineReducers({
//   auth,
// });

// const rootReducer = (state, action) => {
//   if (action.type === "users/logout/fulfilled") {
//     state = undefined;
//   }
//   return reducers(state, action);
// };

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: [ "auth"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export default store;
// export const persist = persistStore(store);
