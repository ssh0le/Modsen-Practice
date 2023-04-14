import { createUrlWithParameters } from "../helpers/createUrlWithParameters"
import { CityInfoResponse } from "@global/types";
import { fetchData } from "@helpers/fetchData";

export async function getCityInfo(latitude: number | string, longitude: number | string): Promise<CityInfoResponse> {
    const apiUrl = process.env.REACT_APP_CITY_INFO_API_URL as string;
    const parameters = {
        latitude,
        longitude
    }
    return await fetchData<CityInfoResponse>(createUrlWithParameters(apiUrl, parameters));
}