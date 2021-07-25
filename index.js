
var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your Instagram name?\n");

console.log(`\nHey! ${userName} Do You Know kara?`);

// Tracking high score
var highScores = [
  {
    name: "Ishaan",
    score: 10,
  },

  {
    name: "Ayan",
    score: 8,
  },

  {
    name: "Mohit",
    score: 8,
  },
]

// play function (Main)
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(`\nAreee ${userName}! bhot sahi`);
    score = score + 2;

  } else {
    console.log(`Oops!! koi na`);

  }

  console.log("Current Score: ", score);
  console.log("-------------\n")
}

// Array of QnA
var questions = [
  {
    question: "\nWhere do I live?\n",
    answer: "Pune"
  },
  {
    question: "\nMy date of birth (just date)?\n",
    answer: "22"
  },
  {
    question: "\nWhat is my Instagram username?\n",
    answer: "whysokara"
  },
 
  {
    question: "\nWhich is my favourite food?\n",
    answer: "Pizza"
  },
   {
    question: "\nSmell I hate the most?\n",
    answer: "Mehndi"
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

if(score < 6){
  console.log(`${userName} You scored ${score}, I thought you knew me well :/ `)
}
else{
  console.log(`You scored ${score}, You know a lot about me. You must be Google! `)
}


console.log("---\nCheck out the top scores and send me a screenshot if you've beaten them!\n")

console.log("Name\t\tScore")
for(var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + "\t\t" + highScores[i].score);
}

console.log("\nThank you for taking the quiz!")