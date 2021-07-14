import { configureStore } from "@reduxjs/toolkit";
import { events } from "../services/api/events/events";
import eventsPageSlice from '../pages/EventsPage/store/eventsPageSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    [events.reducerPath]: events.reducer,
    'eventsPage': eventsPageSlice
  },

  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(events.middleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
