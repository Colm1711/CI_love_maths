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
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The main game 'loop', called when the script is first loaded
 * and after the iser's answer has been processed
 */

//run game funciton
function runGame(){
    //create 2 random numbers between 1 - 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
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

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){
    
}


function displayMultiplyQuestion(){
    
}

