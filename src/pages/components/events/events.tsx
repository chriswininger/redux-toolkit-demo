import useCurrentEvents from '../../../hooks/useCurrentEvents';
import React from 'react';

export default function Events() {
  const { isLoading, error, currentEvents } = useCurrentEvents();

  if (isLoading) {
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