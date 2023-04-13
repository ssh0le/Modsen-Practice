import { ForecastGeolocation } from "@global/types";
import { RootState } from "..";
import { CityInfoResponse } from "@api/cityInfoByGeolocationApi";

export const selectGeolocation = (state: RootState):ForecastGeolocation | null  => state.location.geolocation;
export const selectLocationInfo = (state: RootState): CityInfoResponse | null => state.location.locationInfo;

