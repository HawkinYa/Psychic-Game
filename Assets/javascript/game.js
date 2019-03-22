var game = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = " ";
var userGuess = [];
var lettersGuessed = []
var games = []
var randomItem = game[Math.floor(Math.random() * game.length)];


//Chooses random letter

function reset() {
    randomItem = game[Math.floor(Math.random() * game.length)];
    console.log(randomItem);
    document.getElementById("guess-so-far").innerHTML = ""
}
//pushes random letter to guesses so far
document.onkeyup = function (event) {
    userGuess = event.key;
    lettersGuessed.push(userGuess);
    document.getElementById("guess-so-far").innerHTML = lettersGuessed; console.log("computer:", randomItem)

    //win coding

    if (userGuess == randomItem) {
        wins++
        alert("You win!!!!");
        lettersGuessed = [];
        guessesLeft = 10;
        document.getElementById("wins").innerHTML = wins;
        randomItem = "";

        reset();
    }
    else {
        //loss coding
        guessesLeft--;
        document.getElementById("guess-left").innerHTML = guessesLeft;
        if (guessesLeft === 0) {
            alert("You lose!");
        }
        if (guessesLeft < 1) {
            losses++;
            lettersGuessed = [];
            guessesLeft = 10;
            document.getElementById("losses").innerHTML = losses;
            reset();
        }


    }

}





function restart() {
    location.reload();
};
