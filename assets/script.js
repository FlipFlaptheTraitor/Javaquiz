const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const body = document.getElementById("body");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const divhid = document.getElementById("container");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const tracker = document.getElementById("tracker");

const scoreArea = document.getElementById("scoreArea");
const scorespan = document.getElementById("score");
const scoreBtn = document.getElementById("submitScore");
var highscoreDisplayName = document.getElementById("highscore-initials");
var highscoreDisplayScore = document.getElementById("highscore-score");
var highscoreDiv = document.getElementById("high-scorePage");
const highscore = document.getElementById("highscore");
const highScoreArea = document.getElementById("highscoreContainer");
const returnButton = document.getElementById("btn-return");

let count = 0;
let quizTime = 20;
let score = 0;
let trackQuestions = 0;
let currentCorrectAnswer = 0;

let questions = [
  {
      question : "JavaScript is a ___ -side programming language.",
      
      choiceA : "Client",
      choiceB : "Server",
      choiceC : "Both",
      choiceD : "Neither",
      correct : "C"
  },
  {
    question : "Commonly used data types do NOT include",
    
    choiceA : "strings",
    choiceB : " booleans",
    choiceC : " alerts",
    choiceD : "numbers",
    correct : "C"
},
{
  question : "How do you find the minimum of x and y using JavaScript?",
  
  choiceA : "min(x,y);",
  choiceB : "Math.min(xy)",
  choiceC : "min(xy)",
  choiceD : "Math.min(x,y)",
  correct : "D"
},
{
  question : "Which are the correct if statements to execute certain code if x is equal to 2?",
  
  choiceA : "if(x 2)",
  choiceB : "if(x = 2)",
  choiceC : "if(x == 2)",
  choiceD : "if(x != 2 )",
  correct : "C"
},
];

const lastQuestionIndex = questions.length -1;
let runningQuestionIndex =0;

function displayQuestion() {
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question +"<p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
  }

 
  function startQuiz(){
    trackQuestions = 0;
    score = 0;
    start.style.display = "none";
    highscore.style.display = "none";
    countDown() 
    displayQuestion();
    quiz.style.display = "block";
  }

 

  function countDown(){
    setInterval(function(){
      if (quizTime <= 0) {
        clearInterval(quizTime =0)
        generateHighscores()
      }
      timer.innerHTML = quizTime
      quizTime -=1
    }, 1000)
    if (quizTime == 0) {
      generateHighscores();
      
    };

  }

 
    function checkAnswer(answer){
      if (questions[runningQuestionIndex].correct == answer){
          score++;
        
      } else{
        quizTime -=10
      }

      if(runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        
        displayQuestion();
      } else{ 
        generateHighscores()
        
      }
    }


    

function generateHighscores(){
  highscoreDisplayName.innerHTML = "";
  highscoreDisplayScore.innerHTML = "";
  var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
  for (i=0; i<highscores.length; i++){
      var newNameSpan = document.createElement("li");
      var newScoreSpan = document.createElement("li");
      newNameSpan.textContent = highscores[i].name;
      newScoreSpan.textContent = highscores[i].score;
      highscoreDisplayName.appendChild(newNameSpan);
      highscoreDisplayScore.appendChild(newScoreSpan);
  }
}
function showHighscore(){

  highscoreContainer.style.display = "flex";
  highscoreDiv.style.display = "block";

  generateHighscores();
}








      function restartQuiz(){
        window.location.reload(false);
      }
   
    
    start.addEventListener("click", startQuiz);
    returnButton.addEventListener("click", restartQuiz);
    highscore.addEventListener("click", showHighscore);
    start.addEventListener("click", startQuiz);
    returnButton.addEventListener("click", restartQuiz);