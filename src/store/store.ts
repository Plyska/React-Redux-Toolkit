import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "../services/postsService";
import { albumApi } from "../services/albumsService";
import userReduser from "./redusers/UsersSlice";

const rootRedusers = combineReducers({
    userReduser,
    [postApi.reducerPath]: postApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootRedusers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware).concat(albumApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootRedusers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];