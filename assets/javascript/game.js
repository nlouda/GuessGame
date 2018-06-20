

//DOM Elements
var $playerName=document.getElementById("playerName");
var $placeholder=document.getElementById("placeholder");
var $playerInput=document.getElementById("playerInput");
var $guessesLeft=document.getElementById("guessesLeft");
var $wins=document.getElementById("wins");
var $losses=document.getElementById("losses");

// variables

var guessesLeft= 9;
var wins=0;
var losses=0;
var word = "";
var wordPlaceholder="";
var guessedLetterbank=[];
var incorrectLetterbank=[];

    var wordBank =["antelope", "armadillo", "baboom", "beaver", "caterpillar", "cheetah",
    "donkey", "dragonfly", "elephant", "eagle", "flamingo", "falcon","giraffe", "grasshopper",
    "hippopotamus", "hyena", "iguana", "insect", "jaguar","jellyfish", "kangaroo", "koala",
    "lynx", "leopard", "monkey", "meerkat", "newt", "neandertal", "octupus", "okapi", "panther",
    "peacock", "quail", "quetzal", "rattlesnake", "rabbit", "scorpion","snake","turtle","turkey",
    "urchin", "unicorn", "vampire", "vulture", "whale", "walrus", "xenon","xerus", "yak",
    "yellow baboom", "zebra","zonkey"
    ];
    function newGame(){}


    guessesLeft=9;
    guessedLetterbank=[];
    incorrectLetterbank=[];
    wordPlaceholder=[];
    var word = wordBank[Math.floor(Math.random()*wordBank.length)];
    var playerInput = [];
    for(var i = 0; i<word.length; i++)
    {
        playerInput[i]="_";
    }
    var lettersLeft = word.length;
    while(lettersLeft>0){
        alert(playerInput.join(" "));
    
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if(guess === null){
        break;
    }
    else if(guess.length !==1){
        alert("Please enter a single letter.");
    }
    else{
        for(var j = 0; j< word.length; j++){
            if(word[j] === guess){
                playerInput[j]= guess;
                lettersLeft--;
            }
        }
    }
}
alert(playerInput.join(" "));
alert("Good Job! The answer was " + word);