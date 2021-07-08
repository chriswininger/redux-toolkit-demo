import { configureStore } from "@reduxjs/toolkit";
import { events } from "../services/api/events/events";

const store = configureStore({
  reducer: {
    [events.reducerPath]: events.reducer,
  },

  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(events.middleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
