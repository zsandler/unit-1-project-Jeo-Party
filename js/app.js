// Walk-through of Jeo-Party! game, developed by Zak Sandler

// User story:
// I want to see rectangles with each dollar amount that will show each question when clicked (answerButton250.addEventListener('click', function) => the function will store the value on the card ($250 or $400), change innerText to show a question, and later, if the answer is right, add that stored value to the point total in the Team boxes.  

//Every time someone clicks one of the money cards, I want a multiple choice list (4 options each) to appear using buttons. The buttons will correspond with items in an array, and the computer will pair the selected answer with the actual answer and evaluate if it is true. 

// Each team's score will update by pushing the earnings from each question into the existing amount, tallied now with an forEach add function). The User can click "Reset!" to start the 2nd round (a render function)

// At the end of the game, whoever has the most money will win, as indicated by text that will pop up at the top of the screen: "Team 1/2 wins!"

// Finally, the user will click "Reset!" if they want to play again, which will reset the entire game board (render function).

let currentTeam1Total = 0
let currentTeam2Total = 0
let newTeam1Total250 = currentTeam1Total + 250
let newTeam2Total250 = currentTeam2Total + 250
let newTeam1Total400 = currentTeam1Total + 400
let newTeam2Total400 = currentTeam1Total + 400

let questionArray250 = [{
    question: 'What color is the sky?',
    answer: 'blue',
    possibleChoices: ['red', 'blue', 'green'],
    amount: 250
},
{
    question: 'Which of these is  a meat?',
    answer: 'beef',
    possibleChoices: ['lentils', 'tofu', 'beef'],
    amount: 250
}]

let questionArray400 = [{
    question: 'Who was the 16th President of the US?',
    answer: 'Lincoln',
    possibleChoices: ['Lincoln', 'Garfield', 'Trump'],
    amount: 400
}, {
    question: 'What game is this called?',
    answer: 'Jeo-Party!',
    possibleChoices: ['Jeo-Party!', 'Backgammon', 'Cards'],
    amount: 400
}]

let currentTeamTurn = 'Team 1'
let whoseTurn = document.querySelector('.whoseTurn');

let currentQuestion = null
const possibleChoiceButtons250 = document.querySelector('#possibleChoices250')
const answerButton250 = document.querySelector('#dollars250');
answerButton250.addEventListener('click', function (e) {
    let correctAnswerTeam1250 = document.querySelector('#correctAnswerTeam1250')
    let correctAnswerTeam1400 = document.querySelector('#correctAnswerTeam1400')
    currentQuestion = questionArray250.pop();
    e.target.innerText = currentQuestion.question
    possibleChoiceButtons250.innerHTML = ''
    currentQuestion.possibleChoices.forEach((possibleChoice) => {
        const possibleChoiceButton250 = document.createElement('li')
        possibleChoiceButton250.setAttribute('class', 'choice250')
        possibleChoiceButton250.textContent = possibleChoice;
        possibleChoices250.appendChild(possibleChoiceButton250)
    })
})
const possibleChoiceButtons400 = document.querySelector('#possibleChoices400')
const answerButton400 = document.querySelector('#dollars400');
answerButton400.addEventListener('click', function (e) {
    currentQuestion = questionArray400.pop();
    e.target.innerText = currentQuestion.question
    possibleChoiceButtons400.innerHTML = ''
    currentQuestion.possibleChoices.forEach((possibleChoice) => {
        const possibleChoiceButton400 = document.createElement('li')
        possibleChoiceButton400.setAttribute('class', 'choice400')
        possibleChoiceButton400.textContent = possibleChoice;
        possibleChoices400.appendChild(possibleChoiceButton400)
    })
})

let incorrectAnswer250 = (correctAnswerTeam1250 === false)
possibleChoiceButtons250.addEventListener('click', function (e) {
    if (currentTeamTurn === 'Team 1') {
        currentTeamTurn = 'Team 2'
    } else if (currentTeamTurn === 'Team 2') {
        currentTeamTurn = 'Team 1'
    }
    console.log(currentTeamTurn)
    if (currentTeamTurn === 'Team 1') {
        whoseTurn.innerText = "It is Team 1's Turn!"
    } else if (currentTeamTurn !== 'Team 1') {
        whoseTurn.innerText = "It is Team 2's Turn!"
    }
    if (e.target.innerText === currentQuestion.answer) {
        e.target.style.backgroundColor = 'green'
        currentTeam1Total = newTeam1Total250
        correctAnswerTeam1250.innerText = currentTeam1Total
    } else if (e.target.innerText !== currentQuestion.answer) {
        e.target.style.backgroundColor = 'red'
        correctAnswerTeam1250.innerText = currentTeam1Total
    }
})
let incorrectAnswer400 = (correctAnswerTeam1400 === false)
possibleChoiceButtons400.addEventListener('click', function (e) {
    if (currentTeamTurn === 'Team 1') {
        currentTeamTurn = 'Team 2'
    } else if (currentTeamTurn === 'Team 2') {
        currentTeamTurn = 'Team 1'
    }
    console.log(currentTeamTurn)
    if (currentTeamTurn === 'Team 1') {
        whoseTurn.innerText = "It is Team 1's Turn!"
    } else if (currentTeamTurn !== 'Team 1') {
        whoseTurn.innerText = "It is Team 2's Turn!"
    }
    if (e.target.innerText === currentQuestion.answer) {
        e.target.style.backgroundColor = 'green'
        currentTeam1Total = newTeam1Total250
        correctAnswerTeam1400.innerText = currentTeam1Total
    } else if (e.target.innerText !== currentQuestion.answer) {
        e.target.style.backgroundColor = 'red'
        correctAnswerTeam1400.innerText = currentTeam1Total
    }
})

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', function (e) {
    answerButton250.innerText = '$250'
    correctAnswerTeam1250.innerText = 'Team 1 Total'
    correctAnswerTeam1400.innerText = 'Team 1 Total'
    possibleChoiceButtons400.innerHTML = ''
    possibleChoiceButtons400.innerHTML = ''
    function resetButton(button) {
        document.getElementById('#dollars250').disabled = false
        document.getElementById('#dollars400').disabled = false
    }
})

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