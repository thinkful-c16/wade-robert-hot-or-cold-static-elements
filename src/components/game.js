import React from 'react';

import Feedback from './feedback';

import Input from './input';

import Counter from './counter';

import GuessList from './guess-list';

export default function Game() {

  // const feedback = <Feedback />
  // const input = <Input />
  // const counter = <Counter />
  // const guessList = <GuessList />

  return (
        <section className="game">
          <Feedback />
          <Input />
          <Counter />
          <GuessList />
        </section>
  );
}