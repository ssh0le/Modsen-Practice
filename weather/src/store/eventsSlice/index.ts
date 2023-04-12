import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event } from "@global/types";

interface EventsState {
    list: Event[],
    isLoading: boolean,
}

const initialState: EventsState = {
    list: [],
    isLoading: false,
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<Event[]>) => {
            state.list = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
})

export const {setEvents, setIsLoading} = eventsSlice.actions;
export default eventsSlice.reducer;