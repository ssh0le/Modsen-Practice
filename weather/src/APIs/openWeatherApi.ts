import { createUrlWithParameters } from "../helpers/createUrlWithParameters";

const apiUrl = "http://api.openweathermap.org/geo/1.0/direct"
const apiKey = "047bc0b3c4f6848e338883ef35ae4259";

export type FoundedCitiesResponse = CityInfo[]

export interface CityInfo {
  name: string
  lat: number
  lon: number
  country: string
}

export function getFindCityByNameUrl(name: string): string {
    const parameters = {
        q: name,
        limit: 5,
        appid: apiKey
    }
    return createUrlWithParameters(apiUrl, parameters);
} 