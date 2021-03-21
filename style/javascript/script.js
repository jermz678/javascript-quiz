//variables from html

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var proposedQuestion = document.getElementById("question");
var userScore = document.getElementById("userscore");
var timerDisplay = document.getElementById("timer");
//array to hold the questions as objects
var questions = [
    {
        q: "dlfkja;sldjfasl;dkj",
        a: ["true", "false","falser", "most falsest"]
    },
    {
        q: "sdkjas;lkdjfals;kdjf",
        a: ["true", "false"]
    },
    {
        q: "sdkjas;lkdjfals;kdjf",
        a: ["true", "false"]
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
    countDown();
    proposedQuestion.innerText = questions[0].q;
    btn1.innerText = questions[0].a[1];
    btn2.innerText = questions[0].a[2];
    btn3.innerText = questions[0].a[3];
    btn4.addEventListener.innerText = questions[0].a[0];
    if ( "click" === true){
        updatedScore + 10;
    }
    





}

//timeForQuestions()












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
