var questionIndex = 0;
var answerIndex = 0;
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
    }
    
];

// array to hold answers
var answers = [ "d", "a", "c", "c", "b"];
 
//variable to hold score
updatedScore = 0;
userScore.innerText = "Score " + updatedScore;

//variable to hold time left on clock
var timeleft

//function to end quiz
function endQuiz() {
    
    
        proposedQuestion.innerText = "Great Job! Save your score and see if you are in the top 3!!"
        btn1.remove();
        btn2.remove();
        btn3.remove();
        btn4.remove();
        feedback.innerHTML = "";
    
}
//create timer function
function countDown(){
    timeLeft = 5;
    var interval = setInterval(function(){
    timeLeft--;
    timerDisplay.innerHTML = "Time Left " + timeLeft; 
            if ( timeLeft === 0){
                endQuiz();
                clearInterval(interval);
            }
    }, 1000);
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
    
    if ( questionIndex === 4 || timeLeft >= 0){endQuiz();
};
}

 //beginning first question
function timeForQuestions(){
    startQuiz.remove();
    countDown(); 
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
