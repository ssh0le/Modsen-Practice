import { createUrlWithParameters } from "../helpers/createUrlWithParameters"
const apiUrl = "https://api.bigdatacloud.net/data/reverse-geocode-client"

export interface CityInfoResponse {
    continent: string
    lookupSource: string
    continentCode: string
    localityLanguageRequested: string
    city: string
    countryName: string
    countryCode: string
    postcode: string
    principalSubdivision: string
    principalSubdivisionCode: string
    plusCode: string
    locality: string
    localityInfo: LocalityInfo
}

export interface LocalityInfo {
    administrative: Administrative[]
    informative: Informative[]
}

export interface Administrative {
    name: string
    description: string
    order: number
    adminLevel: number
    isoCode?: string
    wikidataId: string
    geonameId: number
}

export interface Informative {
    name: string
    description: string
    order: number
    isoCode?: string
    wikidataId?: string
    geonameId?: number
}


export function getCityInfoUrl(latitude: number | string, longitude: number | string): string {
    const parameters = {
        latitude,
        longitude
    }
    return createUrlWithParameters(apiUrl, parameters);
}