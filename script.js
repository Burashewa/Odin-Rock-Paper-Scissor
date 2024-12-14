// Rock-Paper-Scissors Game!
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
    input = window.prompt("write your choise from Rock, Paper and Scissors!");
    console.log(input);
    return input;
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoise, computerChoise){
    if (humanChoise ==="Rock" & computerChoise === "Paper"){
        console.log("You won! Rock beats Paper");
        humanScore += 1;
    }else if(humanChoise ==="Paper" & computerChoise === "Rock"){
        console.log("You lose! Rock beats Paper");
        computerScore += 1;
    }

    else if(humanChoise ==="Rock" & computerChoise === "Scissors"){
        console.log("You won! Rock beats Scissors");
        humanScore += 1;
    }else if(humanChoise ==="Scissors" & computerChoise === "Rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    }

    else if(humanChoise ==="Scissors" & computerChoise === "Paper"){
        console.log("You won! Scissors beats Paper");
        humanScore += 1;
    }else if(humanChoise ==="Paper" & computerChoise === "Scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    }
    else if(humanChoise === computerChoise){
        console.log("Drow! play again");
        
    }else{
        console.log("Your input is not correct! Plsease enter again");
    }
}



function playGame(){  
    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoise();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Game Over!");
    if(`${humanScore}` > `${computerScore}`){
        console.log("YOU WON!");
    }else{
        console.log("YOU LOSS!");
    }
    console.log("YOU:" +`${humanScore}`+ "    COMPUTER:" +`${computerScore}`);
}

playGame()


