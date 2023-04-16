import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event } from "@global/types";

interface EventsState {
    list: Event[],
    isLoading: boolean,
    isFetched: boolean,
}

const initialState: EventsState = {
    list: [],
    isLoading: false,
    isFetched: false,
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<Event[]>) => {
            state.list = action.payload;
            state.isFetched = true;
            state.isLoading = false;
        },
        resetEvents: (state) => {
            state.list = [];
            state.isFetched = false;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
})

export const {setEvents, setIsLoading, resetEvents} = eventsSlice.actions;
export default eventsSlice.reducer;