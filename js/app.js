// Walk-through of Jeo-Party! game, developed by Zak Sandler

// User story:
// Upon opening the app, I want to see a board with two categories labeled with headings, and two cards with dollar amounts ($250 and $400) below them. Next to that, I want to see a rectangle with the text "Show Answer" that will show each answer when clicked (card.addEventListener('click', showAnswer)). 
// 
// On the line below the cards,  I want to see a text box where each team can type their answer, as well as two rectangles, labeled "Team 1" and "Team 2", to represent the team podiums. The rectangles will hold the numberical value of how much money each team has earned so far (const moneyEarned = null; function(e), and separetly, (e.value)), and will update after each correct answer is submitted. Finally, I want to see a button labeled "Reset!".

// When I click on any of the category cards with their dollar amounts, I want the question to appear in the question box (function questionReveal(){ questionReveal[num],return question[num] ). If the team's answer = true, that team will win either $250 or $400, and get to pick the next card. If that team's answer = false, the other team will have a chance to type in their answer. If that team's answer is true, they will get the money and the chance to pick the next question. If it is false, the previous team will pick the next question. The money amounts will update (render) after each correct answer.

// The process will continue until all 4 cards have been revealed and the teams have answered or failed to answer to the last card correctly. At that point, the money amounts will be tallied (by pushing the earnings from each question into an existing array of each team's earnings, tallied now with an add function) and the User can click "Reset!" to start the 2nd and final round (a render function)

// The second round will run the same way, with 4 new questions. 

// At the end of the game, whoever has the most money will win, as indicated by text that will pop up at the top of the screen: "Team 1/2 wins!"

// Finally, the user will click "Reset!" if they want to play again, which will reset the entire game board (render function).


// Beginning code:
const answerButton = 'Answer'