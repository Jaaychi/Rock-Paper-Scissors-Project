const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors') {
    return userInput;
  } else {
    console.log('Error, please type: rock, paper,, or scissors');
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  }
};

// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You Won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
};


const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
