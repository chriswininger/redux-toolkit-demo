import React, { useEffect } from 'react';
import Events from '../../components/events/events';
import { useCurrentEventsQuery } from '../../services/api/events/events';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { filterValueUpdate, loadEvents } from './store/eventsPageSlice';
import { CurrentEvent } from '../../dto/currentEvent';

export default function EventsPage() {
  const dispatch = useAppDispatch()
  const { data: currentEvents, error, isLoading, refetch } = useCurrentEventsQuery();

  useEffect(onCurrentEnventsChannged, [currentEvents]);

  const filteredEvents: CurrentEvent[] = useAppSelector(state => state.eventsPage.filteredEvents);

  if (isLoading || !currentEvents) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Error {error}</div>
  }

  const renderedEvents = filteredEvents.map((event, ndx) => (
      <div key={ndx}>{event.title} -- {event.id}</div>
  ));

  return (
    <div>
      <h2>
        Events Page
      </h2>

      <div>
        <button onClick={onRefetchClick}>Reload</button>
      </div>

      <div>
        <input type='text' onKeyUp={(event) => onFilterValueUpdate(event) } />
      </div>
      <div>
        {renderedEvents}
      </div>

      <div>
        <Events />
      </div>
    </div>
  );

  function onCurrentEnventsChannged() {
    console.info('current events changed');
    dispatch(loadEvents(currentEvents || []));
  }

  function onRefetchClick() {
    refetch();
  }

  function onFilterValueUpdate(event: React.KeyboardEvent<HTMLInputElement>) {
    // @ts-ignore
    dispatch(filterValueUpdate(event.target.value))
  }
}
