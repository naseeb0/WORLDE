import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import SearchBox from "../SearchBox";
import DisplayWrapper from "../DisplayWrapper";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listOfGuesses, setListOfGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("inProgress");
  console.log(listOfGuesses);
  console.log(answer);
  return (
    <>
      <DisplayWrapper
        answer={answer}
        setListOfGuesses={setListOfGuesses}
        listOfGuesses={listOfGuesses}
      />
      <SearchBox
        answer={answer}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        listOfGuesses={listOfGuesses}
        setListOfGuesses={setListOfGuesses}
      />
      {gameStatus === "won" && (
        <WinBanner totalGuesses={listOfGuesses.length} />
      )}
      {gameStatus === "lost" && <LostBanner correctAnswer={answer} />}
    </>
  );
}

export default Game;
