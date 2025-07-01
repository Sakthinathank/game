const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win! 🎉';
  } else {
    return 'Computer wins! 🤖';
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner}`;
  });
});
