import { api } from "../api";
import { CurrentEvent } from '../../../dto/currentEvent';

export const events = api.injectEndpoints({
  endpoints: (builder) => ({
    currentEvents: builder.query<CurrentEvent [], null>({
      query: () => "current-events/verified",
      transformResponse: (resp: { events: CurrentEvent []}) => {
        console.info('!!! running transform ' + Date.now());
        return resp.events;
      }
    }),
  }),
});

export const { useCurrentEventsQuery } = events;
