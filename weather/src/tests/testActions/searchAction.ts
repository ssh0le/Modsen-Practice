import { FoundedCitiesResponse } from "@global/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { findCities } from "@store/citySearchSlice";

export const searchAction: PayloadAction<string> = {
    payload: "Mogilev",
    type: findCities.type,
}

export const invalidSearchAction: PayloadAction<string> = {
    payload: "",
    type: findCities.type,
}

export const searchResponse: FoundedCitiesResponse = [{ name: 'Mogilev', lat: 0, lon: 0, country: 'By' }];