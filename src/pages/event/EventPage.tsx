import React from 'react';
import Events from '../components/events/events';
import { useCurrentEventsQuery } from '../../services/api/events/events';

export default function EventPage() {
  const { data: currentEvents, error, isLoading } = useCurrentEventsQuery(null);

  if (isLoading || !currentEvents) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Error {error}</div>
  }

  const renderedEvents = currentEvents.map((event, ndx) => (
      <div key={ndx}>{event['slug'] as string}</div>
  ));

  return (
    <div>
      <div>
        Event Page
      </div>

      <div>
        {renderedEvents}
      </div>

      <div>
        <Events />
      </div>
    </div>
  );
}