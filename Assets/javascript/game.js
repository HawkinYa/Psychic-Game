//  1 - Opening the page will be the start of a new game and the computer will secretly choose a letter from a-z
//  2 - You have 9 guesses to select the correct letter that the computer has chosen meaning your odds of winning are 9:26
//  3 - Each guess will remove one of your remaining guesses you have left if you guess incorrectly
//  4 - If you guess all 9 times incorrectly the counter will reset at 9 guesses, a loss will be tallied against the user, and the computer will choose a new letter which will be the start of a new game
//  5 - If any of your 9 guesses correctly match the letter that the computer has chosen, the counter will reset at 9 guesses, a win will be tallied for the user, and the computer will choose a new letter which will be the start of a new game

//code for the computer choosing a letter at random
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var chosenLetter = letter[Math.floor(Math.random()*letter.length)];

console.log (chosenLetter)


// code for the number of remaining guesses the user has left
var guessesLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9]







