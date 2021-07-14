import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentEvent } from '../../../dto/currentEvent';
import filterByTitle from './filterByTitle';

export interface EventsPageState {
  filterValue: string;
  events: CurrentEvent []
  filteredEvents: CurrentEvent []
}

export function eventsPageState(): EventsPageState {
  return {
    filterValue: '',
    events: [],
    filteredEvents: []
  }
}

const eventsPageStateSlice = createSlice({
  name: 'eventsPage',
  initialState: eventsPageState(),
  reducers: {
    loadEvents: (state, action: PayloadAction<CurrentEvent []>) => {
      const events = action.payload;

      state.events = events;

      state.filteredEvents = filterByTitle(state.filterValue, events);
    },
    filterValueUpdate: (state, action: PayloadAction<string>) => {
      const filterValue = action.payload;

      state.filterValue = filterValue;

      state.filteredEvents = filterByTitle(filterValue, state.events);
    }
  }
});

export const { loadEvents, filterValueUpdate} = eventsPageStateSlice.actions

export default eventsPageStateSlice.reducer;
