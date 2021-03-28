var questionIndex = 0;

//variables from html
var btn1 = document.getElementById("a");
var btn2 = document.getElementById("b");
var btn3 = document.getElementById("c");
var btn4 = document.getElementById("d");
var startQuiz = document.getElementById("quiz-starter");
var proposedQuestion = document.getElementById("question-holder");
var userScore = document.getElementById("userscore");
var timerDisplay = document.getElementById("timer");

//array to hold the questions as objects
var questions = [
    {
        q: "What is a string",
        a: [
            { text: "An object"},
            { text: "your mom"},
            { text: "numbers" },
            { text: "is 0 or more characters within quotes"}
        ]
    },
    {
        q: "!!What is a string",
        a: [
            { text: "An object"},
            { text: "your mom"},
            { text: "numbers"},
            { text: "is 0 or more characters within quotes"}
        ]
    },
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

// array to hold answers

 var answers = [ "a", "b", "c", "d"];
 console.log(answers)


//variable to hold score
updatedScore = 0;
userScore.innerText = "Score " + updatedScore;



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
        
   }
}

function timeForQuestions(){
    startQuiz.remove();
    for(var i = 0; i < questions.length; i++){
    proposedQuestion.innerText = questions[questionIndex].q;
    btn1.innerText = questions[questionIndex].a[0].text;
    btn2.innerText = questions[questionIndex].a[1].text;
    btn3.innerText = questions[questionIndex].a[2].text;
    btn4.innerText = questions[questionIndex].a[3].text;
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
    
    
}}






//button event listener
startQuiz.addEventListener("click", function(){
    timeForQuestions();
}
);
