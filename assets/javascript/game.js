//DOM Elements
var $playerName=document.getElementById("playerName");
var $newGameButton=document.getElementById("button");
var $placeholder=document.getElementById("placeholder");
var $guessedLetters=document.getElementById("guessed-letters");
var $guessesLeft=document.getElementById("guesses-left");
var $wins=document.getElementById("wins");
var $losses=document.getElementById("losses");

// var playerName= prompt("Hello, What is your name?");
// if(playerName= true){
//     $playerName=textContent.playerName;
// }

// variables

    var wordBank =["antelope", "armadillo", "baboom", "beaver", "caterpillar", "cheetah",
    "donkey", "dragonfly", "elephant", "eagle", "flamingo", "falcon","giraffe", "grasshopper",
    "hippopotamus", "hyena", "iguana", "insect", "jaguar","jellyfish", "kangaroo", "koala",
    "lynx", "leopard", "monkey", "meerkat", "newt", "neandertal", "octupus", "okapi", "panther",
    "peacock", "quail", "quetzal", "rattlesnake", "rabbit", "scorpion","snake","turtle","turkey",
    "urchin", "unicorn", "vampire", "vulture", "whale", "walrus", "xenon","xerus", "yak",
    "yellow baboom", "zebra","zonkey"
    ];
    var guessesLeft= 9;
    var wins=0;
    var losses=0;
    var gameRunning=false;
    var word = "";
    var wordPlaceholder="";
    var guessedLetterbank=[];
    var incorrectLetterbank=[];

    function newGame(){
        gameRunning =true;
        guessesLeft=9;
        guessedLetterbank=[];
        incorrectLetterbank=[];
        wordPlaceholder=[];

        word=wordBank[Math.floor(Math.random()*wordBank.length)];

        for(var i=0; i<word.length; i++){
            if(word[i]=== ' '){
                wordPlaceholder.push(' ');
            }
            else{
                wordPlaceholder.push(" _ ");
            }
        }
        $guessesLeft.textContent= guessesLeft;
        $placeholder.textContent=wordPlaceholder.join('');
        $guessedLetters.textContent=incorrectLetterbank;
    }
function letterGuess(letter){
    console.log(letter);
    if(gameRunning === true && guessedLetterbank.indexOf(letter)=== -1){
        guessedLetterbank.push(letter);

        for(var i = 0; i<word.length; i++){
            if(word[i].toLowerCase() === letter.toLowerCase()){
                wordPlaceholder[i] = word[i];
            }
        }
    }
else{
    if(!gameRunning){
alert("The game is not running click start game");
    }
    else{
alert("You already guessed this letter, try a new one.")
    }
}
}

function checkIncorrect(letter){
    if(wordPlaceholder.indexOf(letter.toLowerCase()) === -1 && 
    wordPlaceholder.indexOf(letter.toUpperCase()) === -1){
        guessesLeft--;
        incorrectLetterbank.push(letter);
        $word.textContent=incorrectLetterbank.join(' ');
        $guessesLeft.textContent = guessesLeft;
    }
}
function checkLoss(){
    if(guessesLeft === 0){
        losses++;
        gameRunning=false;
        $losses.textContent = losses;
        $placeholder.textContent=word;
    }
    checkWin()
}
function checkWin(){
    if(word.toLowerCase()=== wordPlaceholder.join('').toLowerCase()){
        win++;
        gameRunning = false;
        $wins.textContent = wins;
    }
}


$newGameButton.addEventListener('click',newGame);
document.onkeyup=function(event){
    if(event.keycode>=65 && event.keycode<=90)
    {
        letterGuess(event.key);
    }
    
}

//     guessesLeft=9;
//     guessedLetterbank=[];
//     incorrectLetterbank=[];
//     wordPlaceholder=[];
//     var word = wordBank[Math.floor(Math.random()*wordBank.length)];
//     var playerInput = [];
//     for(var i = 0; i<word.length; i++)
//     {
//         playerInput[i]="_";
//     }
//     var lettersLeft = word.length;
//     while(lettersLeft>0){
//         alert(playerInput.join(" "));
    
//     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     if(guess === null){
//         break;
//     }
//     else if(guess.length !==1){
//         alert("Please enter a single letter.");
//     }
//     else{
//         for(var j = 0; j< word.length; j++){
//             if(word[j] === guess){
//                 playerInput[j]= guess;
//                 lettersLeft--;
//             }
//         }
//     }
// }
// alert(playerInput.join(" "));
// alert("Good Job! The answer was " + word);