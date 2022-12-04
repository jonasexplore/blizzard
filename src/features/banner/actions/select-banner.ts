import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { BannerType } from "../../../types";
import { BannerInitialProps } from "../banner-slice";

export const selectBannerAction: CaseReducer<
  BannerInitialProps,
  PayloadAction<BannerType>
> = (state, action) => {
  state.selectedBanner = action.payload;
};
