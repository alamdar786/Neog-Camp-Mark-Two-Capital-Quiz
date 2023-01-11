//configuring Chalk
const chalk = require("chalk");
const log = console.log;

//Installing the Read Line Package
var readlineSync = require("readline-sync");

var score = 0; //Global Variable

//Questions as objects in an Array
var questions = [
  
  {
    question: "What is the capital of United States? ",
    answer: "Washington"
  },
  { 
    question: "What is the capital of United Kingdom? ",
    answer: "London"
    },
  { 
    question: "What is the capital of India? ",
    answer: "New Delhi"
    },
  { 
    question: "What is the capital of Australia? ",
    answer: "Canberra"
    },
  { 
    question: "What is the capital of Canada? ",
    answer: "Ottawa"
    }
];

//Introduction
  var userName = readlineSync.question(log(chalk.blue("What is your name? ")));
  
console.log("");
  
log(chalk.bgBlue.bold("Welcome " + userName + " to CAPITAL QUIZ!"));
  
console.log("");

//Quiz Function
function quiz(question,answer) {
  var userAnswer = readlineSync.question(log(chalk.yellowBright(question)));

if(userAnswer === answer)
{
  console.log("");
  log(chalk.greenBright("You are Right!"));
  score = score + 1;
} else {
  console.log("");
  log(chalk.red("You are Wrong!"));
}
  console.log("");
  console.log("------------------");
  log(chalk.red("Your Score is: ", score));
  console.log("------------------");
  console.log("");
}

//calling the quiz function using for loop
for (var i = 0; i < questions.length; i++)
  {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer);
  }

//Printing your final score
console.log("");
log(chalk.bgMagentaBright.bold("Your Final Score is:",score));

//Storing the scores in Database
var highScores = [
  {
  name: "David",
    playerscore: "5" 
}, {
  name: "Anita",
    playerscore: "4" 
}, {
  name: "Faizu",
    playerscore: "4" 
} 
  ];

//Printing the Score table
console.log("");
console.log("");
log(chalk.yellowBright("Check out the High Scores! If you beat it, Ping me!"));
console.log("");
log(chalk.yellowBright("----------------------"));
log(chalk.yellowBright("| Player Score Table |"));
log(chalk.yellowBright("----------------------"));
log(chalk.yellowBright("| ") + chalk.red("Name") + chalk.yellowBright("    |") + chalk.red(" Score") + chalk.yellowBright("    |"));
log(chalk.yellowBright("----------------------"));

for (var j = 0; j < highScores.length; j++)
  {
    var highScoreNames = highScores[j];
    
    log(chalk.yellowBright("| ") + chalk.greenBright(highScoreNames.name) + chalk.yellowBright("   | ") + chalk.greenBright(highScoreNames.playerscore) + chalk.yellowBright("        |"));
    
    log(chalk.yellowBright("----------------------"));
  }
