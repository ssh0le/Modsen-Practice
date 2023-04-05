import { RootState } from "..";

export const selectGeolocation = (state: RootState) => state.location.geolocation;
export const selectLocationInfo = (state: RootState) => state.location.locationInfo;

