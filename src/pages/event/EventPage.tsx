import React from 'react';
import useCurrentEvents from '../../hooks/useCurrentEvents';
import Events from '../components/events/events';

export default function EventPage() {
  const { isLoading, error, currentEvents } = useCurrentEvents();

  if (isLoading && currentEvents.length > 0) {
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