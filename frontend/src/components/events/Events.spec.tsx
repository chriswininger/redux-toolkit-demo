import React from 'react';
import * as EventsApi from '../../services/api/events/events';
import { CurrentEvent } from '../../dto/currentEvent';
import faker from 'faker';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Events from './Events';
import { generateMockEvents } from '../../test-util/generateMockEvent';

describe('Events', () => {
  const loadingSelector = '.ht-loading';
  const errorSelector = '.ht-error';
  const linkSelector = 'a.ht-events__link';

  it('should render loading text when loading data from the api', () => {
    mockUseCurrentEventQuery({isLoading: true })

    const component = mountComponent();
    const loadingElQuery = component.find(loadingSelector);
    expect(loadingElQuery.length).toEqual(1);
  });

  it('should render error when fetch ends in error', () => {
    const givenError = new Error(faker.lorem.sentence());

    mockUseCurrentEventQuery({error: givenError })

    const component = mountComponent();
    const errorElQuery = component.find(errorSelector);
    expect(errorElQuery.length).toEqual(1);

    const loadingElQuery = component.find(loadingSelector);
    expect(loadingElQuery.length).toEqual(0);
  });

  it('should render current events correctly when loaded', () => {
    const givenEvents: CurrentEvent [] = generateMockEvents();

    mockUseCurrentEventQuery({data: givenEvents, isLoading: false });

    const component = mountComponent();

    const errorElQuery = component.find(errorSelector);
    expect(errorElQuery.length).toEqual(0);

    const loadingElQuery = component.find(loadingSelector);
    expect(loadingElQuery.length).toEqual(0);

    const expectedNumLinks = givenEvents.length;
    const linkElsQuery = component.find(linkSelector);
    expect(linkElsQuery.length).toBeGreaterThan(0);
    expect(linkElsQuery.length).toEqual(expectedNumLinks);
  });

  function mountComponent() {
    return mount(
      <MemoryRouter>
        <Events />
      </MemoryRouter>
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
})

