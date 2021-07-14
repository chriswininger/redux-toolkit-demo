import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { shallow } from 'enzyme';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import store, { RootState } from './store/store';
import { Store } from '@reduxjs/toolkit';
import Header from './components/header/header';

describe('App', () => {
  it('should render page', () => {
    const app = renderApp();

    const headerEl = app.find(Header);
    expect(headerEl.length).toEqual(1);
  });

  function renderApp() {
    return shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ).children().first().dive();
  }
});
