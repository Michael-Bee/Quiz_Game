var start = document.querySelector("#startButton");
var time = document.querySelector("#gametime");
var result = document.querySelector("#result");

//Array of questions
var questions = [
        {
                question: "A group of bees is called a ______.",
                response1: "crowd",
                response2: "den",
                response3: "nest",
                response4: "swarm",
                correctAnswer: "4",
        },
        {
                question: "How many of the United States are contiguous?",
                response1: "50",
                response2: "2",
                response3: "48",
                response4: "none",
                correctAnswer: "3",
        },
        {
                question: "When it is 5:00PM in New York, what time is it in California?",
                response1: "6:00PM",
                response2: "4:00PM",
                response3: "3:00PM",
                response4: "2:00PM",
                correctAnswer: "4",
        },
        {
                question: "How many notes are in an octave",
                response1: "8",
                response2: "10",
                response3: "5",
                response4: "0",
                correctAnswer: "1",
        },
        {
                question: "What does BMW stand for?",
                response1: "British Motor Ways",
                response2: "Bavarian Motor Works",
                response3: "Big Money Waster",
                response4: "Bring More Wrenches",
                correctAnswer: "2",
        },
];
var questionIndex = 0;
var score = 0;
var secondsLeft = 61;

function startGame(event){
        //stop bubbling
        event.stopPropagation();
        console.log("start clicked");

        start.setAttribute("style", "visibility: hidden");
        bigText.setAttribute("style", "visibility: hidden");
        timer.setAttribute("style", "visibility: visible");
        
        //start timer
        // Sets interval in variable
        var timerInterval = setInterval(function() {
                secondsLeft--;
                time.textContent = secondsLeft;

                if(secondsLeft === 0) {
                clearInterval(timerInterval);
                gameOver();
                }
        }, 1000);
        
        answer1.style.visibility = "visible";
        answer2.style.visibility = "visible";
        answer3.style.visibility = "visible";
        answer4.style.visibility = "visible";
        
        popQuestion();
};

function popQuestion() {
        var currentQuestion = questions[questionIndex];

        midText.textContent = currentQuestion.question;
        answer1.textContent = ("A: " + currentQuestion.response1);
        answer2.textContent = ("B: " + currentQuestion.response2);
        answer3.textContent = ("C: " + currentQuestion.response3);
        answer4.textContent = ("D: " + currentQuestion.response4);

        answer1.addEventListener("click", checkAnswer);
        answer2.addEventListener("click", checkAnswer);
        answer3.addEventListener("click", checkAnswer);
        answer4.addEventListener("click", checkAnswer);
};

function checkAnswer(event) {
        event.stopPropagation();
        console.log("a response was clicked");

        var currentQuestion = questions[questionIndex];
        console.log(event.target.getAttribute("data-num"));
        if (event.target.getAttribute("data-num") === currentQuestion.correctAnswer) {
                result.textContent = "Right answer!";
                setTimeout(() => {
                        result.textContent = " ";
                }, 1500);
                score +=5;
                console.log(score);
        } else {
                result.textContent = "Sorry, wrong answer.";
                setTimeout(() => {
                        result.textContent = " ";
                }, 1500);
                secondsLeft-=10;
        };

        questionIndex ++;
        if (questionIndex === questions.length) {
                gameOver();
        } else {
                popQuestion();
        };       
};

function gameOver() {
        viewHighscore.setAttribute("style", "visibility: hidden");
        timer.setAttribute("style", "visibility: hidden");
        answer1.style.visibility = "hidden";
        answer2.style.visibility = "hidden";
        answer3.style.visibility = "hidden";
        answer4.style.visibility = "hidden";
        
        bigText.setAttribute("style", "visibility: visible");
        bigText.textContent = ("Game Over!");
        midText.textContent = ("FINAL SCORE: " + score*secondsLeft);

        //NEEDS: Input box to "Please enter your initials:" Submit button adds high score and initials into local memory and triggers highScore function
        // need to make a hidden HTML element for this vvvvv
        // Enter initials: (input box) Submit button
};

function highScore() {
        alert("calls the highScore function to display high scores");
        // High score listings displays and enumerates from local memory
                //clear button wipes local memory and re-displays high score page
                //play again button starts a new game

                // High Score page:
                // h1 High scores
                // Enumerated list of initials and scores
                // Clear High Scores button
                //Play Again button 
}



viewHighscore.addEventListener("click", highScore);
start.addEventListener("click", startGame);