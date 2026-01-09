const choices = document.querySelectorAll('.choice');
const playerDisplay = document.getElementById('player');
const computerDisplay = document.getElementById('computer');
const messageDisplay = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('reset');

const gameChoices = ['rock', 'paper', 'scissors'];
let score = { player: 0, computer: 0, draw: 0 };

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute('data-choice');
        const computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];

        playerDisplay.textContent = `You chose: ${playerChoice}`;
        computerDisplay.textContent = `Computer chose: ${computerChoice}`;

        const winner = determineWinner(playerChoice, computerChoice);
        updateScore(winner);
        updateMessage(winner, playerChoice, computerChoice);
        updateBackground(winner);
    });
});

resetBtn.addEventListener('click', () => {
    score = { player: 0, computer: 0, draw: 0 };
    scoreDisplay.textContent = "You: 0 | Computer: 0 | Draws: 0";
    playerDisplay.textContent = "You chose: -";
    computerDisplay.textContent = "Computer chose: -";
    messageDisplay.textContent = "Make your move!";
    document.body.style.background = 'linear-gradient(120deg, #ff9a9e, #fad0c4)';
});

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) return 'player';
    return 'computer';
}

function updateScore(winner) {
    if (winner === 'player') score.player++;
    else if (winner === 'computer') score.computer++;
    else score.draw++;
    scoreDisplay.textContent = `You: ${score.player} | Computer: ${score.computer} | Draws: ${score.draw}`;
}

function updateMessage(winner, playerChoice, computerChoice) {
    if (winner === 'player') messageDisplay.textContent = `🎉 You crushed ${computerChoice}!`;
    else if (winner === 'computer') messageDisplay.textContent = `💻 Computer crushed your ${playerChoice}!`;
    else messageDisplay.textContent = `🤝 It's a draw between ${playerChoice} and ${computerChoice}!`;
}

function updateBackground(winner) {
    if (winner === 'player') document.body.style.background = 'linear-gradient(120deg, #a1ffce, #faffd1)';
    else if (winner === 'computer') document.body.style.background = 'linear-gradient(120deg, #ff6a6a, #ffc3a0)';
    else document.body.style.background = 'linear-gradient(120deg, #fdfbfb, #ebedee)';
}
