import useCurrentEvents from '../../hooks/useCurrentEvents';
import React from 'react';

export default function HomePage() {
  const { isLoading, error, currentEvents } = useCurrentEvents();

  if (isLoading) {
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
