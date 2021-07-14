import React from 'react';
import { useCurrentEventsQuery } from '../../services/api/events/events';

export default function HomePage() {
  const { data: currentEvents, error, isLoading } = useCurrentEventsQuery();

  if (isLoading || !currentEvents) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Error {error}</div>
  }

  const renderedEvents = currentEvents.map((event, ndx) => (<div key={ndx}>{event.title}</div>));

  return (
      <div className="App">
        { renderedEvents }
      </div>
  );
}
