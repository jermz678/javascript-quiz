var questionIndex = 0;

//variables from html
var btn1 = document.getElementById("a");
var btn2 = document.getElementById("b");
var btn3 = document.getElementById("c");
var btn4 = document.getElementById("d");
var proposedQuestion = document.getElementById("question-holder");
var userScore = document.getElementById("userscore");
var timerDisplay = document.getElementById("timer");

//array to hold the questions as objects
var question1 = [
    {
        q: "What is a string",
        a: [
            { text: "An object"},
            { text: "your mom"},
            { text: "numbers" },
            { text: "is 0 or more characters within quotes"}
        ]
    }
]
var question2 = [
    {
        q: "!!What is a string",
        a: [
            { text: "An object"},
            { text: "your mom"},
            { text: "numbers"},
            { text: "is 0 or more characters within quotes"}
        ]
    }
]
var question3 = [
    {
        q: "!!!What is a string",
        a: [
            { text: "An object"},
            { text: "your mom"},
            { text: "numbers"},
            { text: "is 0 or more characters within quotes"}
        ]
    }
];
console.log(question3)
// array to hold answers

 var answers = [ "a", "b", "c", "d"];
 console.log(answers)


//variable to hold score
updatedScore = 0;
userScore.innerText = "Score " + updatedScore;

//variable to hold correct answer
//var correctAnswer = question1[questionIndex].a[3].text;
//console.log(correctAnswer)

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

function checkAnswer(event){
    
   if(event.target.id === answers[3]){
       alert("yesh");
        updatedScore + 10;
   }

    console.log(event.target.id)
    console.log(answers[3])



}

function timeForQuestions(){
    proposedQuestion.innerText = question1[questionIndex].q;
    btn1.innerText = question1[questionIndex].a[0].text;
    btn2.innerText = question1[questionIndex].a[1].text;
    btn3.innerText = question1[questionIndex].a[2].text;
    btn4.innerText = question1[questionIndex].a[3].text;
    countDown();  
    btn1.addEventListener("click", function(event){
        checkAnswer(event);
    });
    btn2.addEventListener("click", function(event){
        checkAnswer(event);
    });
    btn3.addEventListener("click", function(event){
        checkAnswer(event);
    });
    btn4.addEventListener("click", function(event){
        checkAnswer(event);
    });
}

//button event listener
proposedQuestion.addEventListener("click", function(){
    timeForQuestions();
}
);
