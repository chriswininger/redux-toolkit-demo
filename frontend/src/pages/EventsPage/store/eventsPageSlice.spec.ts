
import store from '../../../store/store';
import { loadEvents } from './eventsPageSlice';
import { generateMockEvents } from '../../../test-util/generateMockEvent';

describe('eventsPageSlice', () => {

  it('loadEvents should populate populate both events and filteredEvents', () => {
    const initialState = store.getState().eventsPage;

    const givenEventsLoaded = generateMockEvents();

    expect(initialState.events).toEqual([]);
    expect(initialState.filteredEvents).toEqual([]);

    store.dispatch(loadEvents(givenEventsLoaded));

    const resultingState = store.getState().eventsPage;

    expect(resultingState.events).toEqual(givenEventsLoaded);
    expect(resultingState.filteredEvents).toEqual(givenEventsLoaded);
  });
});
