import useCurrentEvents from '../../hooks/useCurrentEvents';
import React from 'react';
import { useCurrentEventsQuery } from '../../services/api/events/events';

export default function HomePage() {
  const { data: currentEvents, error, isLoading } = useCurrentEventsQuery(null);

  if (isLoading || !currentEvents) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Error {error}</div>
  }

  const renderedEvents = currentEvents.map((event, ndx) => (<div key={ndx}>{event['title'] as string}</div>));

  return (
      <div className="App">
        { renderedEvents }
      </div>
  );
}
