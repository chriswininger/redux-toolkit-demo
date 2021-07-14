import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { CurrentEvent } from '../../dto/currentEvent';
import * as EventsApi from '../../services/api/events/events';
import React from 'react';
import EventsPage from './EventsPage';
import { Provider } from 'react-redux';
import store, { RootState } from '../../store/store';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import * as EventsPageSlice from '../../pages/EventsPage/store/eventsPageSlice';
import * as StoreExports from '../../store/store';
import { generateMockEvents } from '../../test-util/generateMockEvent';
import { eventsPageState } from '../../pages/EventsPage/store/eventsPageSlice';

interface MockRootState {
  eventsPage: EventsPageSlice.EventsPageState
}

describe('EventsPage', () => {
  const eventElSelector = '.ht-events-page__event';

  let storeState: MockRootState;
  let givenStore: MockStoreEnhanced<MockRootState>;
  let loadEventAction = { payload: [], type: 'test-action' };
  let dispatch: jest.Mock;

  beforeEach(() => {
    storeState = generateInitialState();
    givenStore = generateStoreMock();

    dispatch = jest.fn();

    jest.spyOn(EventsPageSlice, 'loadEvents').mockReturnValue(loadEventAction);
    jest.spyOn(StoreExports, 'useAppDispatch').mockReturnValue(dispatch);
  });

  it('should dispatch correct event when events are loaded', () => {
    mockUseCurrentEventQuery();

    mountComponent();

    expect(EventsPageSlice.loadEvents).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(loadEventAction);
  });

  it('should display filtered events from the store', () => {
    mockUseCurrentEventQuery();

    const givenFilteredEvents: CurrentEvent [] = generateMockEvents();

    storeState.eventsPage.filteredEvents = givenFilteredEvents;

    const component = mountComponent();

    const eventElsQuery = component.find(eventElSelector);

    const expectedNumEvents = givenFilteredEvents.length;
    expect(eventElsQuery.length).toBeGreaterThan(0);
    expect(eventElsQuery.length).toEqual(expectedNumEvents);
  });

  function mountComponent() {
    return mount(
      <Provider store={givenStore}>
        <MemoryRouter>
          <EventsPage />
        </MemoryRouter>
      </Provider>
    );
  }

  function mockUseCurrentEventQuery(
      overrides: { data?: CurrentEvent [], isLoading?: boolean, error?: Error} = {}
  ) {
    jest.spyOn(EventsApi,'useCurrentEventsQuery').mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      refetch: jest.fn(),
      ...overrides
    });
  }

  function generateStoreMock(): MockStoreEnhanced<MockRootState> {
    const mockStoreInitializer = configureStore<MockRootState>();

    return mockStoreInitializer(storeState);
  }

  function generateInitialState(): MockRootState {
    return {
      eventsPage: eventsPageState()
    }
  }
});
