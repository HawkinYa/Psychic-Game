


// array that lists all the computer choices
var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// starting variables for how many wins, losses, wrong letters and guesses there are
var wins = 0;
var losses = 0;
var wrongGuesses = [""]
var guessesLeft = 9;

// function that executes when user pushes a button
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
    console.log(computerGuess);

    // Was it a win??
    if (userGuess == computerGuess) {
        wins++;
    };
    
    // Or a loss..?
    if (userGuess != computerGuess); {
        losses++;
    };

    // If you guessed wrong, which was it?
    function addTo() {
        wrongGuesses.push(("userGuess").value);
        document.getElementById("guesses").innerHTML = "Guesses Left:" + userGuess;
        console.log(wrongGuesses);
    };

    // And how may guesses do you have left?
    if (userGuess != computerGuess) {
        guessesLeft--;
    };

    

    document.getElementById("wins").innerHTML = "Wins:" + wins;
    document.getElementById("losses").innerHTML = "Losses:" + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left:" + guessesLeft;
    document.getElementById("alreadyGuessed").innerHTML = "Wrong Guesses:" + userGuess;

};
