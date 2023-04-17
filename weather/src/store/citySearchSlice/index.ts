import { FoundedCitiesResponse } from "@global/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    isLoading: boolean,
    results: FoundedCitiesResponse | null,
    isError: boolean,
    selectedCity: string | null,
}

const initialState: SearchState = {
    isLoading: false,
    isError: false,
    results: null,
    selectedCity: null
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        findCities: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.isError = false;
        },
        setResults: (state, action: PayloadAction<FoundedCitiesResponse>)=> {
            state.results = action.payload;
            state.isLoading = false;
        },
        stopSearching: (state) => {
            state.isLoading = false;
            state.results = [];
        },
        setSelectedCity: (state, action: PayloadAction<string>) => {
            state.selectedCity = action.payload;
        },
        searchFailed: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})

export const {findCities, setResults, stopSearching, searchFailed, setSelectedCity} = searchSlice.actions;
export default searchSlice.reducer;