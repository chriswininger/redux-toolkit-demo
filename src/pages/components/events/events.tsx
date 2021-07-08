import React from 'react';
import { useCurrentEventsQuery } from '../../../services/api/events/events';

export default function Events() {
  const { data: currentEvents, error, isLoading } = useCurrentEventsQuery(null);

  if (isLoading || !currentEvents) {
    return <div>loading component...</div>
  }

  if (error) {
    return <div>Error {error}</div>
  }

  const renderedEvents = currentEvents.map((event, ndx) => (
      <li key={ndx}>{event['bitly_link'] as string}</li>
  ));

  return (
    <ul>
      {renderedEvents}
    </ul>
  );
}