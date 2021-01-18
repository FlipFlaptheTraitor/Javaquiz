const question =document.querySelector('#question');
const choices =Array.from(document.querySelectorAll('.choice-text'));
const progressText =document.querySelector('#prgressText');
const ScoreText =document.querySelector('#score');
const question =document.querySelector('#question');
const progressBarFull =document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = []


let questions = [
    {
        question : "JavaScript is a ___ -side programming language.",
        
        choice1 : "Client",
        choice2 : "Server",
        choice3 : "Both",
        choice4 : "Neither",
        answer : "3"
    },
    {
      question : "Commonly used data types do NOT include",
      
      choice1 : "strings",
      choice2 : " booleans",
      choice3 : " alerts",
      choice4 : "numbers",
      answer : "2"
  },
  {
    question : "How do you find the minimum of x and y using JavaScript?",
    
    choice1 : "min(x,y);",
    choice2 : "Math.min(xy)",
    choice3 : "min(xy)",
    choice4 : "Math.min(x,y)",
    answer : "4"
  },
  {
    question : "Which are the correct if statements to execute certain code if x is equal to 2?",
    
    choice1 : "if(x 2)",
    choice : "if(x = 2)",
    choice3 : "if(x == 2)",
    choice4 : "if(x != 2 )",
    answer : "3"
  },
];


const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score=0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ){
    localStorage.setItem('mostRecentScore , score')

    return window.location.assign('/end.html')
}
questionCounter++
progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
progressBarFull.style.width = '${(questionCounter/MAX_QUESTION) * 100}%'

const questionsIndex = math.floor(math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsindex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion ['choice' + number]
})
availableQuestions.splce(questionsIndex, 1)

acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.targetconst
        const selectedAnswer = selectedChoice.dataset ['number']
        
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
         
        }, 1000)
    })
})

incrementScore = num => {
    score +=numscoreText.innerText = score 
}

startGame()