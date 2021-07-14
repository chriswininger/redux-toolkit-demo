import { api } from "../api";
import { CurrentEvent } from '../../../dto/currentEvent';

export const events = api.injectEndpoints({
  endpoints: (builder) => ({
    currentEvents: builder.query<CurrentEvent [], void>({
      query: () => "events",
      transformResponse: (resp: { events: CurrentEvent []}) => {
        return resp.events;
      }
    }),
    event: builder.query<CurrentEvent, string>({
      query: (id: string) => `events/${id}`,
      transformResponse: (resp: { event: CurrentEvent}) => {
        return resp.event;
      }
    })
  })
});

export const { useCurrentEventsQuery, useEventQuery } = events;
