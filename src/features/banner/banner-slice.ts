import { createSlice } from "@reduxjs/toolkit";
import { bannerItems } from "../../data/banners";
import { BannerType } from "../../types";
import { selectBannerAction } from "./actions/select-banner";

export type BannerInitialProps = {
  selectedBanner: BannerType;
  banners: Array<BannerType>;
};

const initialState: BannerInitialProps = {
  selectedBanner: bannerItems[0],
  banners: bannerItems,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    selectBanner: selectBannerAction,
  },
});

export const { selectBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
