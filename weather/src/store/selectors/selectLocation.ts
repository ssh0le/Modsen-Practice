import { ForecastGeolocation,CityInfoResponse } from "@global/types";
import { RootState } from "..";

export const selectGeolocation = (state: RootState):ForecastGeolocation | null  => state.location.geolocation;
export const selectLocationInfo = (state: RootState): CityInfoResponse | null => state.location.locationInfo;

