//variables for indexs to acces arrays
var questionIndex = 0;
var answerIndex = 0;

//variables from html
var highScore1 = document.getElementById("highscore-1");
var highScore2 = document.getElementById("highscore-2");
var highScore3 = document.getElementById("highscore-3");
var btn1 = document.getElementById("a");
var btn2 = document.getElementById("b");
var btn3 = document.getElementById("c");
var btn4 = document.getElementById("d");
var questionDiv = document.getElementById("question-div");
var startQuiz = document.getElementById("quiz-starter");
var proposedQuestion = document.getElementById("question-holder");
var userScore = document.getElementById("userscore");
var timerDisplay = document.getElementById("timer");
var feedback = document.getElementById("feedback");

//array to hold the questions as objects
var questions = [
    {
        q: "0 or more characters within quotes is a ....",
        a: [
            { text: "Object"},
            { text: "Array"},
            { text: "Numbers" },
            { text: "String"}
        ]
    },
    {
        q: "Value of true or false is a .....",
        a: [
            { text: "Boolean"},
            { text: "Null"},
            { text: "Numbers"},
            { text: "Object"}
        ]
    },
    {
        q: "An Invalid Value is....",
        a: [
            { text: "Object"},
            { text: "Numbers"},
            { text: "Null"},
            { text: "String"}
        ]
    },
    {
        q: "An entity with properties and type is a.....",
        a: [
            { text: "String"},
            { text: "Array"},
            { text: "Object"},
            { text: "Boolean"}
        ]
    },
    {
        q: "A special variable that holds a list of items is a....",
        a: [
            { text: "Numbers"},
            { text: "Array"},
            { text: "Boolean"},
            { text: "String"}
        ]
    },  
    {
        q: "",
        a: [
            { text: ""},
            { text: ""},
            { text: ""},
            { text: ""}
        ]
    }    
];

// array to hold answers
var answers = [ "d", "a", "c", "c", "b"];

//hiding buttons
btn1.style.visibility = "hidden";
btn2.style.visibility = "hidden";
btn3.style.visibility = "hidden";
btn4.style.visibility = "hidden";

//variable to hold time left on clock
var timeLeft = 0;
var interval;
//create timer function
function countDown(){
    timeLeft = 50;
    interval = setInterval(function(){
    timeLeft--;
    timerDisplay.innerHTML = "Time Left " + timeLeft; 
    //stopping quiz if time is up or out of questions
            if ( timeLeft <= 0 || questionIndex === 5 || answerIndex === 5){
                clearInterval(interval);
                endQuiz();
                timerDisplay.innerHTML = "Time Left 0"; 
            }
    }, 1000);
}

//variable to hold score
var updatedScore = 0;
userScore.innerText = "Score " + updatedScore;

// array to hold printed scores
var printedScores = ["0", "0", "0"];
highScore1.innerText = "Top HighScore: " + printedScores[0];
highScore2.innerText =  "Second HighScore: " + printedScores[1];
highScore3.innerText = "Third HighScore: " + printedScores[2];

//setting scores in local storage as a starting point
localStorage.setItem("highScore", printedScores[0]);
localStorage.setItem("secondScore", printedScores[1]);
localStorage.setItem("thirdScore", printedScores[2]);

// function to show highscore
function bestScore(){
    if(parseInt(localStorage.getItem("highScore")) < updatedScore){
            //updating 3rd score
            localStorage.setItem("thirdScore", localStorage.getItem("secondScore"));
            printedScores[2] = localStorage.getItem("thirdScore");
            highScore3.innerText = "Third HighScore: " + localStorage.getItem("thirdScore")
            //updating 2nd score
            localStorage.setItem("secondScore", localStorage.getItem("highScore"));
            printedScores[1] = localStorage.getItem("secondScore");
            highScore2.innerText = "Second HighScore: " + localStorage.getItem("secondScore");
            //updating high score
            var currentHighScore = updatedScore.toString();
            localStorage.setItem("highScore", currentHighScore);
            highScore1.innerText = "Top HighScore: " + localStorage.getItem("highScore");
            printedScores[0] = currentHighScore;
    
    } else if (parseInt(localStorage.getItem("secondScore")) < updatedScore){
            //updating 3rd score if high score doesn't change
            localStorage.setItem("thirdScore", localStorage.getItem("secondScore"));
            printedScores[2] = localStorage.getItem("thirdScore");
            highScore3.innerText = "Third HighScore: " + localStorage.getItem("thirdScore");
            //updating 2nd score if high score doesn't change
            var currentSecondScore = updatedScore.toString();
            localStorage.setItem("secondScore", currentSecondScore);
            highScore2.innerText = "Second HighScore: " + localStorage.getItem("secondScore");
            printedScores[1] = currentSecondScore;
    
    } else if (parseInt(localStorage.getItem("thirdScore")) < updatedScore){
            //updating 3rd score if high score and second score doesn't change
            var currentThirdScore = updatedScore.toString();
            localStorage.setItem("thirdScore", currentThirdScore);
            highScore3.innerText = "Third HighScore: " + localStorage.getItem("thirdScore");
            printedScores[2] = currentThirdScore;
    
    }else{
        //if no score can be updated
        proposedQuestion.innerText = " You did not earn a high score. Try again!"
        }
}

//function to create a try again button
var restart = document.createElement("button");  
function tryAgain (){
    restart.classList.add("quiz-starter");
    restart.innerHTML = "Try Again!"
    questionDiv.appendChild(restart);
}

//function to end quiz
function endQuiz() {
    proposedQuestion.innerText = "Great Job! Your score made it in the top 3!!"
    btn1.style.visibility = "hidden";
    btn2.style.visibility = "hidden";
    btn3.style.visibility = "hidden";
    btn4.style.visibility = "hidden";
    tryAgain();
    bestScore();
    restart.addEventListener("click", function(){
        timeForQuestions();
    })
}

//checking if answer is correct and going to next question
function checkAnswer(event){
    if(event.target.id === answers[answerIndex]){
        updatedScore += 10;
        userScore.innerText = "Score " + updatedScore;
        feedback.innerHTML = "Correct! 👍";
    }
    else{
        timeLeft -= 10;
        feedback.innerHTML = "Wrong 👎";
    }  
    questionIndex++;
    answerIndex++;
    
    proposedQuestion.innerText = questions[questionIndex].q;
    btn1.innerText = questions[questionIndex].a[0].text;
    btn2.innerText = questions[questionIndex].a[1].text;
    btn3.innerText = questions[questionIndex].a[2].text;
    btn4.innerText = questions[questionIndex].a[3].text;     
    if(questionIndex === 5 || answerIndex === 5){
        questionIndex === 0;
    }
}

 //beginning first question
function timeForQuestions(){
    startQuiz.remove();
    restart.remove();
    clearInterval(interval);
    countDown();
    questionIndex = 0;
    answerIndex = 0;
    updatedScore = 0;
    userScore.innerText = "Score " + updatedScore;
    btn1.style.visibility = "visible";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
    btn4.style.visibility = "visible";
    for(var i = 0; i < questions.length; i++){
    proposedQuestion.innerText = questions[questionIndex].q;
    btn1.innerText = questions[questionIndex].a[0].text;
    btn2.innerText = questions[questionIndex].a[1].text;
    btn3.innerText = questions[questionIndex].a[2].text;
    btn4.innerText = questions[questionIndex].a[3].text;
    }
}    
    
//button event listener
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

startQuiz.addEventListener("click", function(){
    timeForQuestions();
}
);

