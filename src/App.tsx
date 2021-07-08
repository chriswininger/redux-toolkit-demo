import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Header from './pages/components/header/header';
import EventPage from './pages/event/EventPage';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/event' component={EventPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </>);
}

export default App;
