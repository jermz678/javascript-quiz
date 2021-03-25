var questionIndex = 0;

//variables from html
 
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4= document.getElementById("btn4");
var proposedQuestion = document.getElementById("question-holder");
var userScore = document.getElementById("userscore");
var timerDisplay = document.getElementById("timer");
//array to hold the questions as objects
var questions = [
    {
        q: "What is a string",
        a: [
            { text: "An object", correct: false},
            { text: "your mom", correct: false},
            { text: "numbers", correct: false},
            { text: "is 0 or more characters within quotes", correct: true}]
        },
    {
        q: "!!What is a string",
        a: [
            { text: "An object", correct: false},
            { text: "your mom", correct: false},
            { text: "numbers", correct: false},
            { text: "is 0 or more characters within quotes", correct: true}]
        },
    {
        q: "!!!What is a string",
        a: [
            { text: "An object", correct: false},
            { text: "your mom", correct: false},
            { text: "numbers", correct: false},
            { text: "is 0 or more characters within quotes", correct: true}]
        },
];

//variable to hold score
updatedScore = 0;
userScore.innerText = "Score " + updatedScore;

//variable to hold correct answer
var correctAnswer = questions[questionIndex].a[3].text;

//beginning of quiz
function startQuiz (){
    proposedQuestion.innerText = "Start the Quiz"
}
startQuiz();

//create timer function
function countDown(){
    var timeLeft = 30;
    var interval = setInterval(function(){
    timeLeft--;
    timerDisplay.innerHTML = "Time remaining " + timeLeft; 
            if ( timeLeft === 0){
         clearInterval(interval);
         }
    }, 1000);
}
console.log(questions[questionIndex].a[3].text)



function checkAnswer(x,y,z,q){
    
    if ( x === correctAnswer){
        
        alert("halllelujah");
    }




}
var x = btn1;
var y = btn2;
var z = btn3;
var q = btn4;
function timeForQuestions(){
    proposedQuestion.innerText = questions[questionIndex].q;
    btn1.innerText = questions[questionIndex].a[0].text;
    btn2.innerText = questions[questionIndex].a[1].text;
    btn3.innerText = questions[questionIndex].a[2].text;
    btn4.innerText = questions[questionIndex].a[3].text;
    countDown();  
    btn1.addEventListener("click", function(){
        checkAnswer();
    });
    btn2.addEventListener("click", function(){
        checkAnswer();
    });
    btn3.addEventListener("click", function(){
        checkAnswer();
    });
    btn4.addEventListener("click", function(){
        checkAnswer();
    });
}
console.log(q);

//button event listener
proposedQuestion.addEventListener("click", function(){
    timeForQuestions();
}
);
