const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timer = document.getElementById("timer");

const optA = document.getElementById("A");
const optB = document.getElementById("B");
const OptC = document.getElementById("C");
const OptD = document.getElementById("C");

const tracker = document.getElementById("tracker");
const score = document.getElementById("Score");
const questionTime = 10;
const gaugeWidth = 150;
let count = 0;
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
    question : "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    
    choiceA : "alertBox(“Hello DataFlair!”);",
    choiceB : "alert(Hello DataFlair!);",
    choiceC : "msgAlert(“Hello DataFlair!”);",
    choiceD : "alert(“Hello DataFlair!”);",
    correct : "D"
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
  question : "Which are the correct if statements to execute certain code if “x” is equal to 2?",
  
  choiceA : "if(x 2)",
  choiceB : "if(x = 2)",
  choiceC : "if(x == 2)",
  choiceD : "if(x != 2 )",
  correct : "C"
},
];
const lastQuestionIndex = questions.length -1;
let runningQuestionIndex =0;
//let lastQuestionIndex = questions.length -1;
//let runningQuestionIndex = 0;

function displayQuestion() {
  let q = questions[runningQuestionIndex];
  question.innerHTML = "<p>" +q.question+"<p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
function progressRender(){
  for (let qIndex =0; qIndex <=lastQuestionIndex; qIndex++){
      progressRender.innerHTML += "<div class='prog' id=" +qIndex +"></div>";
  }
}
function answerIsCorrect(){
  document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
function answerIsWrong(){
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red"
}


const gaugeProgressUnit = gaugeWidth/questionTime;
  function counterRender(){
    if( count <=questionTime){
      counter.innerHTML = count;
      timeGauge.style.width = gaugeProgressUnit * count + "px";
      count++;
    } else{
      count = 0;
      answerIsWrong();
      if ( runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        questionRender();
      }else{ clearInterval(Timer);
              scoreRender();
      }
    }
  }

  function checkAnswer(answer){
    if (questions[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
    } else{
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
      count = 0;
      runningQuestionIndex++;
      questionRender();
    } else{
        clearInterval(Timer);
        scoreRender();
    }
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
  //fix
function scoreRender(){
  ServiceWorkerContainer.style.display="block";
  let scorePerCent = Math.round(100* score / questions.length);
}
