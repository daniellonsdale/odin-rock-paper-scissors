//Create humanScore and computerScore variables
let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

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

function getHumanChoice(){
    


}

function playRound(humanChoice, computerChoice){
    //If humanChoice and computerChoice are equal log "You tie!" and don't increment anything
    if (humanChoice === computerChoice){
        console.log(`It's a tie! You both played ${humanChoice}.`);
    }
    //If humanChoice is rock and computerChoice is scissors, log "You win" and increment playerScore
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    //If humanChoice is paper and computerChoice is rock, log "You win" and increment playerScore
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    //If humanChoice is scissors and computerChoice is paper, log "You win" and increment playerScore
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    //Otherwise, log "You lose! computerChoice beats playerChoice!" and increment computerScore
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

function playGame(humanChoice){
    


    if(humanScore === computerScore){
        console.log("You tied the whole game! Not too bad!");
    }
    else if(humanScore > computerScore){
        console.log("You won the whole game! Congratulations!");
    }
    else{
        console.log("You lost this time! Better luck next time!");
    }
}

playGame();