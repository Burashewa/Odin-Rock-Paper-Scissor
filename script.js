// Rock-Paper-Scissors Game!


const Rock = document.querySelector(".rock");
const Scissor = document.querySelector(".scissor");
const Paper = document.querySelector(".paper");

const para = document.querySelector(".para");
const score = document.querySelector(".score");

Rock.addEventListener("click", ()=>{
    playRound("Rock",getComputerChoice());
});

Scissor.addEventListener("click", ()=>{
    playRound("Scissors",getComputerChoice());
});

Paper.addEventListener("click", ()=>{
    playRound("Paper",getComputerChoice());
});


function getComputerChoice(){
    let values = Math.floor(Math.random()*(4-1)+1);
    if (values == 1){
        values = "Rock"; 
    }else if(values ==2){
        values = "Paper";
    }else{
        values = "Scissors";
    }
    return values;
}




let humanScore = 0;
let computerScore = 0;

function playRound(humanChoise, computerChoise){

    if(humanScore == 5 || computerScore == 5){
        para.textContent = "Game Over!"
        score.textContent = `Computer Score : ${computerScore} || Your Score : ${humanScore}`; 
    }

    else if (humanChoise ==="Rock" & computerChoise === "Paper"){
        para.textContent = "You loss! Paper beats Rock";
        humanScore += 1;

        score.textContent = `Computer Score : ${computerScore} || Your Score : ${humanScore}`;
    }    
    else if(humanChoise ==="Rock" & computerChoise === "Scissors"){
        para.textContent = "You won! Rock beats Scissors";
        humanScore += 1;

        score.textContent = `Computer Score : ${computerScore} || Your Score : ${humanScore}`;

    } 

    else if(humanChoise ==="Paper" & computerChoise === "Rock"){
        para.textContent = "You Win! Paper beats Rock";
        computerScore += 1;

        score.textContent = `Computer Score : ${computerScore} || Your Score : ${humanScore}`;

        
    }
    else if(humanChoise ==="Paper" & computerChoise === "Scissors"){
        para.textContent = "You lose! Scissors beats Paper";
        computerScore += 1;

        score.textContent = `Computer Score : ${computerScore} || Your Score : ${humanScore}`;
    }

    else if(humanChoise ==="Scissors" & computerChoise === "Rock"){
        para.textContent = "You lose! Rock beats Scissors";
        computerScore += 1;

        score.textContent = `Computer Score : ${computerScore} || Your Score : ${humanScore}`;
    }
    else if(humanChoise ==="Scissors" & computerChoise === "Paper"){
        para.textContent = "You won! Scissors beats Paper";
        humanScore += 1;

        score.textContent = `Computer Score : ${computerScore} || Your Score : ${humanScore}`;

    }

    else if(humanChoise === computerChoise){
        para.textContent = "Draw! play again";
        score.textContent = `Computer Score : ${computerScore} || Your Score : ${humanScore}`;
        
    }   

}





