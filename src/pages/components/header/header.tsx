import React from 'react';
import './header.scss'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='hp-header'>
      <h1>Hook Playground</h1>

      <div className="hp-header__links-wrapper">
        <Link to='/'>Home</Link>
        <Link to='/event'>Event</Link>
      </div>
  </header>)
}
