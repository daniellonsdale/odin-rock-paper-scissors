//Create humanScore and computerScore variables
let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

const playerScoreText = document.querySelector(".player-score span");
const computerScoreText = document.querySelector(".computer-score span");
const roundResult = document.querySelector(".round-result span");
const finalResult = document.querySelector(".final-result span");
const scoreContainer = document.querySelector(".score-container");

rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});

function getComputerChoice(){
    //Create ranNum variable
    let ranNum;

    //Generate random number * 100, round down, and set to ranNum
    ranNum = Math.floor(Math.random()*100);

    //Set choice to rock if ranNum is 0-33
    if (ranNum <= 33){
        return "rock";
    }

    //Set choice to paper if ranNum is 34-66
    else if (ranNum >= 34 && ranNum <= 66){
        return "paper";
    }

    //Set choice to scissors if ranNum is 67-99
    else{
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){


    //If humanChoice and computerChoice are equal log "You tie!" and don't increment anything
    if (humanChoice === computerChoice){
        roundResult.textContent = `It's a tie! You both played ${humanChoice}.`;
    }
    //If humanChoice is rock and computerChoice is scissors, log "You win" and increment playerScore
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    //If humanChoice is paper and computerChoice is rock, log "You win" and increment playerScore
    else if(humanChoice === "paper" && computerChoice === "rock"){
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    //If humanChoice is scissors and computerChoice is paper, log "You win" and increment playerScore
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        roundResult.textContent =`You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    //Otherwise, log "You lose! computerChoice beats playerChoice!" and increment computerScore
    else{
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }
}

//FIND WAY TO END GAME AFTER SOMEONE WINS
function playGame(humanChoice){
    playRound(humanChoice, getComputerChoice());
    playerScoreText.textContent = `The current player score is: ${humanScore}`;
    computerScoreText.textContent = `The current computer score is: ${computerScore}`;

    if(humanScore + computerScore >= 5){
        if(humanScore === computerScore){
            finalResult.textContent = "You tied the whole game! Not too bad! Reload the page to play again";
        }
        else if(humanScore > computerScore){
            finalResult.textContent = "You won the whole game! Congratulations! Reload the page to play again";
        }
        else{
            finalResult.textContent = "You lost this time! Better luck next time! Reload the page to play again";
        }
    }
    
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    finalResult.textContent = '';
    roundResult.textContent = '';
}