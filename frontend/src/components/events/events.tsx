import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentEventsQuery } from '../../services/api/events/events';
import { CurrentEvent } from '../../dto/currentEvent';

export default function Events() {
  const { data, error, isLoading } = useCurrentEventsQuery();

  const currentEvents: CurrentEvent[] = data || [];

  if (isLoading) {
    return <div>loading component...</div>
  }

  if (error) {
    return <div>Error {error}</div>
  }

  const renderedEvents = currentEvents.map((event, ndx) => (
      <li key={ndx}>
        <Link to={`/event/${event.id}`}>
          {event.slug + '--' + event.briefDescription}
        </Link>
      </li>
  ));

  return (
    <ul>
      {renderedEvents}
    </ul>
  );
}