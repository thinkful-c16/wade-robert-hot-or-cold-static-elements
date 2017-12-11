import React from 'react';

import Feedback from './feedback';

import Input from './input';

import Counter from './counter';

import GuessList from './guess-list';

import './game.css';

export default function Game() {
  return (
        <section className="game">
          {Feedback}
          {Input}
          {Counter}
          {GuessList}
        </section>
  );
}