import { api } from "../api";
import { CurrentEvent } from '../../../dto/currentEvent';

export const events = api.injectEndpoints({
  endpoints: (builder) => ({
    currentEvents: builder.query<CurrentEvent [], void>({
      query: () => "events",
      transformResponse: (resp: { events: CurrentEvent []}) => {
        console.log('fetched events');
        return resp.events;
      }
    }),
    event: builder.query<CurrentEvent, string>({
      query: (id: string) => `events/${id}`,
      transformResponse: (resp: { event: CurrentEvent}) => {
        console.log('fetched event ' + resp.event.id);
        return resp.event;
      }
    })
  })
});

export const { useCurrentEventsQuery, useEventQuery } = events;
