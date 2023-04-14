import { FoundedCitiesResponse } from "@global/types";
import { createUrlWithParameters } from "@helpers/createUrlWithParameters";
import { fetchData } from "@helpers/fetchData";


export async function getFoundedCities(name: string): Promise<FoundedCitiesResponse> {
  const apiUrl = process.env.REACT_APP_CITY_SEARCH_API_URL as string;
  const apiKey = process.env.REACT_APP_CITY_SEARCH_API_KEY as string;
  const parameters = {
    q: name,
    limit: 5,
    appid: apiKey
  }
  return await fetchData<FoundedCitiesResponse>(createUrlWithParameters(apiUrl, parameters));
} 