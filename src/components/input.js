import React from 'react';

import './input.css';

export default function Input() {
  return (
    <form>
      <input type="text" name-"userGuess" id="userGuess" className="text" maxlength="3"
      autocomplete="off" placeholder="Enter your Guess" required />
      <input type="submit" id="guessbutton" className="button" name="submit" value="Guess"
      style="opacity: 1;" />
    </form>
  );
}
