import React from "react";

function SearchBox({
  listOfGuesses,
  setListOfGuesses,
  answer,
  gameStatus,
  setGameStatus,
}) {
  console.log("DEBUGGING/................");
  console.log({ answer });
  console.log({ gameStatus });
  const [enteredText, setEnteredText] = React.useState("");
  const handleInputChange = (event) => {
    setEnteredText(event.target.value.toUpperCase());
  };

  function handleEnteredText(guess) {
    const nextListOfGuesses = [...listOfGuesses, guess];
    if (listOfGuesses.length >= 5) {
      setGameStatus("lost");
    }
    setListOfGuesses(nextListOfGuesses);
  }
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleEnteredText(enteredText);
        if (enteredText === answer) {
          setGameStatus("won");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-z]{5}"
        value={enteredText}
        disabled={gameStatus !== "inProgress"}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchBox;
