//Wait for the DOm to finish loading before running the game
//Get the button elememets and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                //This will call run game
                runGame(gameType);
            }
        });
    }
    //this will start default game of addition when page loads
    runGame('addition');
})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the iser's answer has been processed
 */

//run game funciton
function runGame(gameType){
    //create 2 random numbers between 1 - 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    //checking game type is equal to addition. With exception hanfdling. 'throw' will stop game and displays to console for debugging 
    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

//check users answer
function checkAnswer(){

}

//calculate if the answer is correct or incorrect
function calculateCorrectAnswer(){

}

//increment the users score
function incrementScore(){

}

//increment the wrong answer
function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(){
    
}


function displayMultiplyQuestion(){
    
}

