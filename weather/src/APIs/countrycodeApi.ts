const apiUrl = "https://countrycode.dev/api/countries/iso2/";

export type CountryFullInfo = CountryInfo[]

export interface CountryInfo {
  country_name: string
  area: string
  capital_city: string
  continent: string
  continent_1: string
  currency: string
  E164: string
  FIPS: string
  GDP: string
  GeoNameID: string
  ISO_numeric: string
  ISO2: string
  ISO3: string
  language_codes: string
  languages: string
  phone_code: string
  time_zone: string
  TLD: string
}


export function getCountryInfoByCodeUrl(code: string): string {
  return apiUrl + code;
}