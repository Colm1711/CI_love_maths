//In this example we are avoiding storing vars globally. Bad practice as your script is not the only being loaded to webpage. Could conflict with another script.


//Wait for the DOm to finish loading before running the game
//Get the button elememets and add event listeners to them

//#1
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                //after submit button is clicked runs checkanswer function
                checkAnswer();
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
//#2
function runGame(gameType){
    //create 2 random numbers between 1 - 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    //checking game type is equal to addition. With exception hanfdling. 'throw' will stop game and displays to console for debugging 
    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }else if (gameType === 'multiply'){
        displayMultiplyQuestion(num1, num2);
    }else if(gameType === "subtract"){
        displaySubtractQuestion(num1, num2)
    }
    
    else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}
//#5
//check users answer
/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(){
    //as element is an input need to the value as there is no text
    let userAnswer  = parseInt(document.getElementById('answer-box').value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrrect = userAnswer === calculateAnswer[0];

    if(isCorrrect){
        alert("You are correct correct!")
        incrementScore();
    }else{
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculateAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculateAnswer[1]);
}

//#4
/**
 * Gets the operands (the numbers) and the operator(plus, minus etc)
 * directly from the DOM, and returns the correct answer.
 */
//calculate if the answer is correct or incorrect
function calculateCorrectAnswer(){
    //first 2 are getting the numbers from the DOM. Converts them to interger as will be returned as a string
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;


    //this checks to see if operator is plus(addition), if yes will return object of result of 2 operands being added together as well as game type. Else will throw exceptions.
    if (operator === "+"){
        return [operand1 + operand2, 'addition'];
    }
    else if(operator === "x"){
        return [operand1 * operand2, 'multiply'];
    }
    else if(operator === "-"){
        return [operand1 - operand2, 'subtract']
    }
    else{
        alert(`Unimmplemented operator ${operator}`);
        throw `Unimmplemented operator ${operator}. Aborting!`;
    }

}
//#6
//increment the users score
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;

}
//#6
//increment the wrong answer
/**
 * Gets the current of incorrect score from the DOM and increments it by 1
 */
function incrementWrongAnswer(){

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

}

//#3
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2){
    //Ternary operator reference. This works just like an if statement. Before question mark is the conditional and right hand side is the return values
    //condition ? true part : false part;
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

//#7
function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

