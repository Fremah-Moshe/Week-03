const secret = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

let guess = null;

while (guess !== secret) {
  guess = Number(prompt('Guess a number between 1 and 100:'));
  guesses++;

  if (guess > secret) {
    alert('Too high');
  } else if (guess < secret) {
    alert('Too low');
  } else {
    alert(`Correct! You took ${guesses} guesses.`);
  }
}
