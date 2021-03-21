//variables from html

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var proposedQuestion = document.getElementById("question");
var userScore = document.getElementById("userscore");
var timerDisplay = document.getElementById("timer");
//array to hold the questions as objects
// q = questions; a is possible answers; c is correct answer
var questions = [
    {
        q: "What is a string",
        a: ["An object", "your mom","numbers", "is 0 or more characters within quotes"],
        c: "is 0 or more characters within quotes"
    },
    {
        q: "What is a string",
        a: ["An object", "your mom","numbers", "is 0 or more characters within quotes"],
        c: "is 0 or more characters within quotes"
    },
    {
        q: "What is a string",
        a: ["An object", "your mom","numbers", "is 0 or more characters within quotes"],
        c: "is 0 or more characters within quotes"
    }
]
//variable to hold score
updatedScore = 0
userScore.innerText = "Score " + updatedScore;
//beginning of quiz
function startQuiz (){
    btn1.innerText = "";
    btn2.innerText = "";
    btn3.innerText = "";
    btn4.innerText = "";
    proposedQuestion.innerText = "Start the Quiz"
}
startQuiz();

//create timer function
function countDown(){
    var timeLeft = 3;
 var interval = setInterval(function(){
     timeLeft--;
    timerDisplay.innerHTML = "Time remaining " + timeLeft; 
    if ( timeLeft === 0){
         clearInterval(interval);
    }
    }, 1000);
}

//create first question
function timeForQuestions(){
    for (i = 0; i < questions.length; i++){
     countDown();
    proposedQuestion.innerText = questions[i].q;
    btn1.innerText = questions[i].a[1];
    btn2.innerText = questions[i].a[2];
    btn3.innerText = questions[i].a[3];
    btn4.innerText = questions[i].a[0];
    if ( ){
        updatedScore + 10;
    }else{
        updatedScore - 10;
    }
    }
}













//button event listener
btn1.addEventListener("click", function(){
});

btn2.addEventListener("click", function(){
});

btn3.addEventListener("click", function(){
});

btn4.addEventListener("click", function(){
});

proposedQuestion.addEventListener("click", function(){
    timeForQuestions();
}
);
