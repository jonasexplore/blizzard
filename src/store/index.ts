import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../features/banner/banner-slice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
