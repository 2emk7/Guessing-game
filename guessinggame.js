const readline = require('readline');

// Create a new readline interface
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

console.log('Welcome to the guessing game!');
console.log('I am thinking of a number between 1 and 10. Can you guess it?');

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Keep track of the number of guesses
let guesses = 0;

// Function to prompt the user for a guess
const promptForGuess = () => {
rl.question('What is your guess? ', (answer) => {
// Convert the answer to a number
const guess = parseInt(answer, 10);
// Increment the number of guesses
guesses += 1;

if (guess === randomNumber) {
  // The guess is correct
  console.log(`Congratulations, you guessed the number in ${guesses} guesses!`);

  // Close the readline interface
  rl.close();
} else if (guess > randomNumber) {
  // The guess is too high
  console.log('Your guess is too high, try again');
  promptForGuess();
} else if (guess < randomNumber) {
  // The guess is too low
  console.log('Your guess is too low, try again');
  promptForGuess();
}
});
};

// Start the game by prompting for the first guess
promptForGuess();
