import React from "react";
import Banner from "../Banner/Banner";
function WinBanner({ totalGuesses }) {
  return (
    <Banner status={"happy"}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {totalGuesses === 1 ? "1 guess" : `${totalGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinBanner;
