const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const body = document.getElementById("body");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const divhid = document.getElementById("container");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const tracker = document.getElementById("tracker");
const HighscoreInfo = document.getElementById("Highscore-info");
const scoreArea = document.getElementById("scoreArea");
const scorespan = document.getElementById("score");
const scoreBtn = document.getElementById("submitScore");
var HighscoreInitials = document.getElementById("highscore-initials");
var HighscoreDisplay = document.getElementById("highscore-score");
var initials = document.getElementById("initials");
var finalScore = document.getElementById("finalScore");
const highscore = document.getElementById("highscore");
const highScoreArea = document.getElementById("highscoreContainer");
const returnButton = document.getElementById("btn-return");

let count = 0;
let quizTime = 30;

let score = 0;
let trackQuestions = 0;
let currentCorrectAnswer = 0;
let timeLeft;
let correct;
let timerInterval;

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

let lastQuestionIndex = questions.length;
let runningQuestionIndex =0;

function displayQuestion() {
  if (runningQuestionIndex === lastQuestionIndex){
    return showHighscore();
} 
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question +"<p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
  }
  function generateHighscore(){
    HighscoreInitials.innerHTML = "";
    HighscoreDisplay.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        HighscoreInitials.appendChild(newNameSpan);
        HighscoreDisplay.appendChild(newScoreSpan);
    }
  }
  function showHighscore(){
    question.style.display = "none";
    choices.style.display = "none";
    highScoreArea.style.display = "flex";
   //need to create add time left function
    clearInterval(timerInterval);
    initials.value = "";
    finalScore.innerHTML ="your score was:"+score;
    var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    var currentUser = initials.value.trim();
    var currentHighscore = {
        name : currentUser,
        score : score
    };
    highscoreContainer.style.display = "flex";
    HighscoreInfo.style.display = "block";
    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    
  }
 
  function startQuiz(){
    timerInterval = setInterval(function(){
      if (quizTime <= 0) {
        clearInterval(timerInterval);
      }
      timer.innerHTML = quizTime
      quizTime -=1
    }, 1000)
    start.style.display = "none";
    highscore.style.display = "none";
    displayQuestion();
    quiz.style.display = "block";
    
  }
    function checkAnswer(answer){
      correct = questions[ runningQuestionIndex].correct;
      if (answer === correct &&  runningQuestionIndex !== lastQuestionIndex){
          score++;
          runningQuestionIndex++;
          displayQuestion();
      }
       else if (answer !== correct && runningQuestionIndex !== lastQuestionIndex){
        quizTime -=10
        runningQuestionIndex++;  
      displayQuestion();
      } else{ 
       generateHighscore()
        
      }
    }

    function restartQuiz(){
        window.location.reload(false);
      }
   
    
    start.addEventListener("click", startQuiz);
    returnButton.addEventListener("click", restartQuiz);
    highscore.addEventListener("click", showHighscore);
    start.addEventListener("click", startQuiz);