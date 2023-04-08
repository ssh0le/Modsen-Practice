import { CityInfoResponse } from "@api/cityInfoByGeolocationApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    isLoading: boolean,
    results: CityInfoResponse | null,
    isError: boolean,
}

const initialState: SearchState = {
    isLoading: false,
    isError: false,
    results: null
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        findCities: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.isError = false;
        },
        setResults: (state, action: PayloadAction<CityInfoResponse>)=> {
            state.results = action.payload;
            state.isLoading = false;
        },
        searchFailed: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})

export const {findCities, setResults, searchFailed} = searchSlice.actions;
export default searchSlice.reducer;