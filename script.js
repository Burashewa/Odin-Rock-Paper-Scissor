let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let values = Math.floor(Math.random()*(4-1)+1);
    if (values == 1){
        values = "Rock"; 
    }else if(values ==2){
        values = "Paper";
    }else{
        values = "Scissors";
    }
    console.log(values);
    return values;
}


function getHumanChoise(){
    values = window.prompt("write your choise from Rock, Paper and Scissors!");
    console.log(values);
    return values;
    
}


function playRound(humanChoise, computerChoise){
    if (humanChoise === computerChoise){
        console.log("You Win!");
    }else{
        console.log("You Lose!");
    }
}

const humanSelection = getHumanChoise();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
