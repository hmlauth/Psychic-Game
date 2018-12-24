//Create array and/or objects that list out options for game.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
//Create variables that hold the number of wins, losses, and guesses remaining. This is the starting point for scoring - wins/loses start at 0, and user gets 9 guesses per "round."
var wins = 0;
var losses = 0;
var guessRemain = 9;
var guessSoFar;

//Create variables that hold references to the places in HTML where we want to display things. 
var guessSoFarText = document.getElementById("guessSoFar-text");
var winsText = document.getElementById("wins-text");
var guessRemainText = document.getElementById("guessRemain-text");
var lossesText = document.getElementById("losses-text");


//Computer randomly choses a letter from the alphabet (It's thinking of a letter! Time to guess what it is!)
var computer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer guess: ", computer);
    
    //On user's "key down" the "event" function runs which codes what occurs if the user guesses correctly or incorrectly for 9 attempts.
    document.onkeydown = function(event) {
        
            //Stores user's guess and computer's choice in respective variables for comparison in if, else if, and else logic. The computer randomly chooses from given array as defined above.
            var guessSoFar = event.key;
            console.log(guessSoFar);

            //Displays user's guess
            guessSoFarText.textContent += guessSoFar + ", ";
            console.log(guessSoFarText);

            //If user's guess is the SAME as computer's then increase wins by 1 and make "Guesses So Far" blank again.
            if (guessSoFar === computer) {
                console.log("You guessed right!");
                wins++;
                guessSoFarText.textContent = "";
                //need to assign random generator to computer again to override previous (if condition is met then run random generator)
                computer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                console.log("Next Computer guess: ",computer);
                //Else, if user's guess is NOT the same as computer's, and  if the remaining guesses are greater than 0, decrease remaining guesses by 1.
                } else if ((guessSoFar !== computer) && (guessRemain > 1)) {    
                    guessRemain--;
                    //Else, increase losses by 1, set remaining guesses back to 9, and make "Guesses So Far" blank again.
                    } else {
                    losses++;
                    guessRemain = 9;
                    guessSoFarText.textContent = "";
                    computer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                    console.log("Next Computer guess: ",computer);
                    }

        //Displays text selected by user
        //make displayed text = to the displayed text + my guess so far so that all text shows on the screen.
        winsText.textContent = wins;
        lossesText.textContent = losses;
        guessRemainText.textContent = guessRemain;

    };
