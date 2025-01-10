// Walk-through of Jeo-Party! game, developed by Zak Sandler

// User story:
// I want to see rectangles with each dollar amount that will show each question when clicked (answerButton250.addEventListener('click', function) => the function will store the value on the card ($250 or $400), change innerText to show a question, and later, if the answer is right, add that stored value to the point total in the Team boxes.  

//Every time someone clicks one of the money cards, I want a multiple choice list (4 options each) to appear using buttons. The buttons will correspond with items in an array, and the computer will pair the selected answer with the actual answer and evaluate if it is true. 

// Each team's score will update by pushing the earnings from each question into the existing amount, tallied now with an forEach add function). The User can click "Reset!" to start the 2nd round (a render function)

// At the end of the game, whoever has the most money will win, as indicated by text that will pop up at the top of the screen: "Team 1/2 wins!"

// Finally, the user will click "Reset!" if they want to play again, which will reset the entire game board (render function).

let category1 = 'Food'
let category2 = 'People'
let currentTeam1Total = 0
let currentTeam2Total = 0
let currentTeamTurn = 'Team 1'
let whoseTurn = document.querySelector('.whoseTurn');
let currentQuestion = null
let correctAnswerTeam1250 = document.querySelector('#correctAnswerTeam1250')
let correctAnswerTeam2250 = document.querySelector('#correctAnswerTeam2250')
const possibleChoiceButtons250 = document.querySelector('#possibleChoices250')
const possibleChoiceButtons400 = document.querySelector('#possibleChoices400')
const answerButton250 = document.querySelector('#dollars250');
const answerButton400 = document.querySelector('#dollars400');
const resetButton = document.querySelector('#reset')

let questionArray250 = [{
    question: 'What country first made Ramen?',
    answer: 'Japan',
    possibleChoices: ['China', 'Japan', 'Korea'],
    amount: 250
},
{
    question: 'What is a key ingredient in Chinese 5-spice?',
    answer: 'Star-anise',
    possibleChoices: ['Star-anise', 'Soy Sauce', 'Sesame Oil'],
    amount: 250
},
{
    question: 'What is the Thai name for "Drunken Noodles"?',
    answer: 'Pad Kee Mao',
    possibleChoices: ['Pad Kee Mao', 'Pad Krapow', 'Pad See Ew'],
    amount: 250
},
{
    question: 'What country does Broccoli originate from?',
    answer: 'Italy',
    possibleChoices: ['China', 'Turkey', 'Italy'],
    amount: 250
}]

let questionArray400 = [{
    question: 'Which of these pop stars is openly bipolar?',
    answer: 'Mariah Carey',
    possibleChoices: ['Mariah Carey', 'Ariana Grande', 'Usher'],
    amount: 400
}, {
    question: 'Who got 2nd place in Season 2 of American Idol?',
    answer: 'Clay Aiken',
    possibleChoices: ['Clay Aiken', 'Ruben Studdard', 'Kelly Clarkson'],
    amount: 400
}, {
    question: 'Who was the 16th President of the US?',
    answer: 'Abraham Lincoln',
    possibleChoices: ['Abraham Lincoln', 'James Garfield', 'Ulysses Grant'],
    amount: 400
}, {
    question: "Who won the silver medal at Women's Gymnastics in 2024?",
    answer: 'Rebeca Andrade',
    possibleChoices: ['Rebeca Andrade', 'Simone Biles', 'Wendy Bruce'],
    amount: 400
}]


answerButton250.addEventListener('click', function (e) {
    currentQuestion = questionArray250.pop();
    e.target.innerText = currentQuestion.question
    possibleChoiceButtons250.innerHTML = ''
    possibleChoiceButtons400.innerHTML = ''
    currentQuestion.possibleChoices.forEach((possibleChoice) => {
        const possibleChoiceButton250 = document.createElement('li')
        possibleChoiceButton250.setAttribute('class', 'choice250')
        possibleChoiceButton250.textContent = possibleChoice;
        possibleChoices250.appendChild(possibleChoiceButton250)
        console.log(currentQuestion)
    })
})

possibleChoiceButtons250.addEventListener('click', function (e) {
    if (currentTeamTurn === 'Team 1') {
        if (e.target.innerText === currentQuestion.answer) {
            e.target.style.backgroundColor = 'green'
            currentTeam1Total = currentTeam1Total + currentQuestion.amount
            correctAnswerTeam1250.innerText = currentTeam1Total
        } else {
            e.target.style.backgroundColor = 'red'
            currentTeamTurn = 'Team 2'
            whoseTurn.innerText = "It is Team 2's Turn!"
            console.log('wrong answer')
        }
    }
    else {
        if (e.target.innerText === currentQuestion.answer) {
            e.target.style.backgroundColor = 'green'
            currentTeam2Total = currentTeam2Total + currentQuestion.amount
            correctAnswerTeam2250.innerText = currentTeam2Total
        } else if (e.target.innerText !== currentQuestion.answer) {
            e.target.style.backgroundColor = 'red'
            currentTeamTurn = 'Team 1'
            whoseTurn.innerText = "It is Team 1's Turn!"
        }
    }
})

answerButton400.addEventListener('click', function (e) {
    currentQuestion = questionArray400.pop();
    e.target.innerText = currentQuestion.question
    possibleChoiceButtons250.innerHTML = ''
    possibleChoiceButtons400.innerHTML = ''
    currentQuestion.possibleChoices.forEach((possibleChoice) => {
        const possibleChoiceButton400 = document.createElement('li')
        possibleChoiceButton400.setAttribute('class', 'choice400')
        possibleChoiceButton400.textContent = possibleChoice;
        possibleChoices400.appendChild(possibleChoiceButton400)
    })
})

possibleChoiceButtons400.addEventListener('click', function (e) {

    if (currentTeamTurn === 'Team 1') {
        if (e.target.innerText === currentQuestion.answer) {
            e.target.style.backgroundColor = 'green'
            currentTeam1Total = currentTeam1Total + currentQuestion.amount
            correctAnswerTeam1250.innerText = currentTeam1Total
            console.log(currentTeam1Total)
        } else {
            e.target.style.backgroundColor = 'red'
            currentTeamTurn = 'Team 2'
            whoseTurn.innerText = "It is Team 2's Turn!"
        }

        console.log(currentTeam1Total)
    } else {
        if (e.target.innerText === currentQuestion.answer) {
            e.target.style.backgroundColor = 'green'
            currentTeam2Total = currentTeam2Total + currentQuestion.amount
            correctAnswerTeam2250.innerText = currentTeam2Total
        } else {
            e.target.style.backgroundColor = 'red'
            currentTeamTurn = 'Team 1'
            whoseTurn.innerText = "It is Team 1's Turn!"
        }
    }
})

resetButton.addEventListener('click', function (e) {
    answerButton250.innerText = '$250'
    answerButton400.innerText = '$400'
    correctAnswerTeam1250.innerText = 'Team 1 Total'
    correctAnswerTeam2250.innerText = 'Team 2 Total'
    possibleChoiceButtons250.innerHTML = ''
    possibleChoiceButtons400.innerHTML = ''
    whoseTurn.innerText = "It is Team 1's Turn!"
    // function resetButton(button) {
    //     document.getElementById('#dollars250').disabled = false
    //     document.getElementById('#dollars400').disabled = false
    // }
    // resetButton()
})




// For later: use render() to reset board
// const resetButton = document.querySelector('button')
// resetButton.addEventListener('click', function (reset)) 