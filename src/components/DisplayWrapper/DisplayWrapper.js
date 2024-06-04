import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
function DisplayWrapper({ listOfGuesses, setListOfGuesses, answer }) {
  console.log({ listOfGuesses });
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
        return <Guess key={num} value={listOfGuesses[num]} answer={answer} />;
      })}
    </div>
  );
}

export default DisplayWrapper;
