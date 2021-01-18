const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");
const timer = document.getElementById("timer");
const tracker = document.getElementById("tracker");
const scoreD = document.getElementById("Score");
const highscore = document.getElementById("highscore");
let count = 0;
  const questionTime = 10;
const gaugeWidth = 150;
const gaugeProgress = gaugeWidth/questionTime;
let score = 0;

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
    correct : "B"
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

  start.addEventListener("click", startQuiz);
  function startQuiz(){
    start.style.display = "none";
    counterRender();
    Timer = setInterval(counterRender,1000);
    progressRender();
    displayQuestion();
    quiz.style.display = "block";
  }

  function progressRender(){
    for (let qIndex =0; qIndex <=lastQuestionIndex; qIndex++){
        progressRender.innerHTML += "<div class='prog' id=" +qIndex +"></div>";
    }
  }

  
 
function counterRender(){
    if( count <=questionTime){
      counter.innerHTML = count;
      timeGauge.style.width = gaugeProgress * count + "px" ;
      count++;
    } else{
      count = 0;
      answerIsWrong();
      if(runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        displayQuestion();
      } else{
        clearInterval(Timer);
        scoreRender();
      }
    }
  }
    function checkAnswer(answer){
      if (questions[runningQuestionIndex].correct == answer){
          score++;
         
      } else{
    
      }
      count = 0;
      if(runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        displayQuestion();
      } else{
          clearInterval(Timer);
          scoreRender();
      }
    }
   function scoreRender(){
    
    }
    function highscores(){
      var highscore = localStorage.getItem("highscore");

      if(highscore !== null){
          if (score > highscore) {
              localStorage.setItem("highscore", score);      
          }
      }
      else{
          localStorage.setItem("highscore", score);
      }
    }
    