import React from 'react';

import Header from './header';

import Game from './game';

import './main.css';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Game />
    </div>
  );
};