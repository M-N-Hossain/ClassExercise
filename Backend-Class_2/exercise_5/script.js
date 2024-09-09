function guessNumberGame() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  let guessCount = 0;

  while (true) {
    const userGuess = parseInt(prompt("Select a number between 1 and 100: "));

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      continue;
    }

    guessCount++;

    if (randomNumber === userGuess) {
      alert(
        "Congratulations! You guessed the number in " + guessCount + " tries."
      );
      break;
    } else if (randomNumber > userGuess) {
      alert("Your guess is too low. Try again.");
    } else {
      alert("Your guess is too high. Try again.");
    }
  }
}

guessNumberGame();
