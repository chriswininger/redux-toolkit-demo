import React from 'react'
import { useParams } from "react-router-dom";
import { useEventQuery } from '../../services/api/events/events';

export default function EventPage () {
  const { id } = useParams<{ id: string}>();

  const { data: event, error, isLoading  } = useEventQuery(id);

  if (isLoading) {
    return <div>...loading</div>
  }

  if (error) {
    return <div>Error: ${error}</div>
  }

  return (
    <div>
      <h2>{event?.title}</h2>
    </div>
  );
}
