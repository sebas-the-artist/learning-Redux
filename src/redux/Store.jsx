import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import { PostsApi } from "./postSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    PostsApi: PostsApi.reducer,
    [PostsApi.reducerPath]: PostsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostsApi.middleware),
});
