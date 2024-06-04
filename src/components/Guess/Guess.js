import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
function Guess({ value, answer }) {
  const guessResult = checkGuess(value, answer);
  console.log(guessResult);

  function Cell({ letter, status }) {
    const className = status ? `cell ${status}` : "cell";
    return <span className={className}>{letter}</span>;
  }

  return (
    <p className="guess">
      {range(5).map((rangeNum) => {
        return (
          <Cell
            key={rangeNum}
            letter={guessResult ? guessResult[rangeNum].letter : undefined}
            status={guessResult ? guessResult[rangeNum].status : undefined}
          />
        );
      })}
    </p>
  );
}
export default Guess;
