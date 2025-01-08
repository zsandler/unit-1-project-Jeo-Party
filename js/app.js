// Walk-through of Jeo-Party! game, developed by Zak Sandler

// User story:
// I want to see rectangles with each dollar amount that will show each question when clicked (answerButton250.addEventListener('click', function) => the function will store the value on the card ($250 or $400), change innerText to show a question, and later, if the answer is right, add that stored value to the point total in the Team boxes.  

//Every time someone clicks one of the money cards, I want a multiple choice list (4 options each) to appear using buttons. The buttons will correspond with items in an array, and the computer will pair the selected answer with the actual answer and evaluate if it is true. 

// Each team's score will update by pushing the earnings from each question into the existing amount, tallied now with an forEach add function). The User can click "Reset!" to start the 2nd round (a render function)

// At the end of the game, whoever has the most money will win, as indicated by text that will pop up at the top of the screen: "Team 1/2 wins!"

// Finally, the user will click "Reset!" if they want to play again, which will reset the entire game board (render function).

let team1Total

let questionArray250 = [{
    question: 'What color is the sky?',
    answer: 'blue',
    possibleChoices: ['red', 'blue', 'green'],
    amount: '$250'
},
{
    question: 'Which of these is  a meat?',
    answer: 'beef',
    possibleChoices: ['lentils', 'tofu', 'beef'],
    amount: '$250'
}]

let questionArray400 = [{
    question: 'Who was the 16th President of the US?',
    answer: 'Lincoln',
    possibleChoices: ['Lincoln', 'Garfield', 'Trump'],
    amount: '$400'
}, {
    question: 'What game is this called?',
    answer: 'Jeo-Party!',
    possibleChoices: ['Jeo-Party!', 'Backgammon', 'Cards'],
    amount: '$400'
}]

const answerButton250 = document.querySelector('#dollars250');
answerButton250.addEventListener('click', function (e) {
    let displayedQuestion250 = questionArray250.pop();
    e.target.innerText = displayedQuestion250.question
    displayedQuestion250.possibleChoices.forEach((possibleChoice) => {
        const possibleChoices250 = document.getElementById('possibleChoices250')
        const possibleChoiceButton250 = document.createElement('li')
        possibleChoiceButton250.textContent = possibleChoice;
        possibleChoices250.appendChild(possibleChoiceButton250)
    })
})

// element.style.red

// forEach create button (displayedQuestion.possibleChoices) - use radio?
// Place buttons in HTML code (appendChild)

const answerButton400 = document.querySelector('#dollars400');
answerButton400.addEventListener('click', function (e) {
    let displayedQuestion400 = questionArray400.pop()
    console.log(displayedQuestion400.question)
    e.target.innerText = displayedQuestion400.question
    displayedQuestion400.possibleChoices.forEach((possibleChoice) => {
        const possibleChoices400 = document.getElementById('possibleChoices400')
        const possibleChoiceButton400 = document.createElement('li')
        possibleChoiceButton400.textContent = possibleChoice;
        possibleChoices400.appendChild(possibleChoiceButton400)
    })
})

// For later: use render() to reset board
// const resetButton = document.querySelector('button')
// resetButton.addEventListener('click', function (reset)) 
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(function(fruit, index, array) {
//     console.log(`Fruit: ${fruit}`);