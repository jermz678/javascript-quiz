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
var feedback = document.getElementById("feedback");

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
 

//variable to hold score
updatedScore = 0;
userScore.innerText = "Score " + updatedScore;

var timeleft
//create timer function
function countDown(){
    timeLeft = 100;
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
        updatedScore += 10;
        userScore.innerText = "Score " + updatedScore;
        feedback.innerText = "Correct";
        console.log(updatedScore)
    }
    else {
        timeLeft -= 10;
        feedback.innertext = "Wrong";
    }
    questionIndex++;
        proposedQuestion.innerText = questions[questionIndex].q;
        btn1.innerText = questions[questionIndex].a[0].text;
        btn2.innerText = questions[questionIndex].a[1].text;
        btn3.innerText = questions[questionIndex].a[2].text;
        btn4.innerText = questions[questionIndex].a[3].text;
        
}
 
function timeForQuestions(){
    startQuiz.remove();
    countDown(); 
    //for(var i = 0; i < questions.length; i++){
    proposedQuestion.innerText = questions[questionIndex].q;
    btn1.innerText = questions[questionIndex].a[0].text;
    btn2.innerText = questions[questionIndex].a[1].text;
    btn3.innerText = questions[questionIndex].a[2].text;
    btn4.innerText = questions[questionIndex].a[3].text;
    }
    
    
    
    


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




//button event listener
startQuiz.addEventListener("click", function(){
    timeForQuestions();
}
);
