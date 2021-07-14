import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Header from './components/header/header';
import EventsPage from './pages/EventsPage/EventsPage';
import EventPage from './pages/EventPage/EventPage';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/event/:id' exact component={EventPage} />
        <Route path='/event' exact component={EventsPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </>);
}

export default App;
