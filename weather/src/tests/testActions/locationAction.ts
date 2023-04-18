import { CityInfoResponse, ForecastGeolocation } from "@global/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { setGeolocation } from "@store/locationSlice";

export const locationAction: PayloadAction<ForecastGeolocation> = {
    payload: {latitude: 53.902471, longitude: 27.5618225},
    type: setGeolocation.type
} 

export const locationResponse: CityInfoResponse = {
    "continent": "Europe",
    "lookupSource": "coordinates",
    "continentCode": "EU",
    "localityLanguageRequested": "en",
    "city": "Minsk",
    "countryName": "Belarus",
    "countryCode": "BY",
    "postcode": "",
    "principalSubdivision": "Horad Minsk",
    "principalSubdivisionCode": "BY-HM",
    "plusCode": "9G59WH26+XP",
    "locality": "Tsentralny District",
    "localityInfo": {
        "administrative": [
            {
                "name": "Belarus",
                "description": "republic in Eastern Europe",
                "order": 3,
                "adminLevel": 2,
                "isoCode": "BY",
                "wikidataId": "Q184",
                "geonameId": 630336
            },
            {
                "name": "Minsk",
                "description": "capital and largest city of Belarus",
                "order": 4,
                "adminLevel": 4,
                "wikidataId": "Q2280",
                "geonameId": 625144
            },
            {
                "name": "Horad Minsk",
                "description": "capital and largest city of Belarus",
                "order": 5,
                "adminLevel": 4,
                "isoCode": "BY-HM",
                "wikidataId": "Q2280",
                "geonameId": 625143
            },
            {
                "name": "Tsentralny District",
                "description": "intercity district of Minsk, Belarus",
                "order": 6,
                "adminLevel": 9,
                "wikidataId": "Q2023936",
                "geonameId": 620745
            }
        ],
        "informative": [
            {
                "name": "Europe",
                "description": "continent",
                "order": 1,
                "isoCode": "EU",
                "wikidataId": "Q46",
                "geonameId": 6255148
            },
            {
                "name": "Europe/Minsk",
                "description": "time zone",
                "order": 2
            }
        ]
    }
};