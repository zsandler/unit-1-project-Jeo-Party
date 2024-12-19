// Walk-through of Jeo-Party! game, developed by Zak Sandler

// User story:
// Upon opening the app, I want to see a board with two categories labeled with headings, and two cards with dollar amounts ($250 and $400) below them. Below that, I want to see two rectanges (representing the Jeopardy podiums), labeled Team 1 and Team 2, where the dollar amounts they earn will appear. I also want to see a blank rectangle where each answer will appear, as well as a text box where each team can type their question. Finally, I want to see a timer and buttons labeled "Buzzer" and "Next!"

// When I push "Next!", I want to be able to click on any of the category cards with their dollar amounts. When I click that, I want the answer to appear in the answer box, and the timer to start. Either Team can click "Buzzer" before the timer runs out. If the timer runs out, it will switch to the other team's turn and neither team will earn money. If the "Buzzer" button is clicked before the timer runs out, whichever team clicked it will be able to type their question into the question box. If answer = true, they will win either $250 or $400. If answer = false, the other team will have a chance to type in the question. If time runs out, neither team will get money.

// IF either team got the question right, it will be their turn to pick the next card. ELSE IF neiter team got it right, whichever team went first last time will go first again. 

// The process will continue until all 4 cards have been revealed and the teams have answered or failed to ask a question to the last card. At that point, the money amounts will be tallied and the User can click "Next!" to start the 2nd and final round.

// The second round will run the same way, with 4 new questions. 

// At the end of the game, whoever has the most money will win, as indicated by text that will pop up at the top of the screen: "Team 1/2 wins!"

// Finally, the user will click "Next!" if they want to play again, which will reset the entire game board.

const answerButton = 'Answer'