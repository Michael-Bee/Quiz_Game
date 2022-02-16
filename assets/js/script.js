var start = document.querySelector("#startButton");
var time = document.querySelector("#gametime")
// Make an array of questions with their corresponding responses and answer
var questions = [
        {
                question: "What are a group of bees called?",
                response1: "A crowd.",
                response2: "A den.",
                response3: "A nest.",
                response4: "A swarm.",
                answer: "4",
        },
        {
                question: "How many of the United States are contiguous?",
                response1: "50",
                response2: "2",
                response3: "48",
                response4: "none",
                answer: "3",
        },
        {
                question: "When it is 5:00PM in New York, what time is it in California?",
                response1: "6:00PM",
                response2: "4:00PM",
                response3: "3:00PM",
                response4: "2:00PM",
                answer: "4",
        },
        {
                question: "How many notes are in an octave",
                response1: "8",
                response2: "10",
                response3: "5",
                response4: "0",
                answer: "1",
        },
        {
                question: "What does BMW stand for?",
                response1: "British Motor Ways",
                response2: "Bavarian Motor Works",
                response3: "Big Money Waster",
                response4: "Bring More Wrenches",
                answer: "2",
        },
];
var questionsIndex = questions.length;
console.log(questionsIndex);


function startGame(event){
        //stop bubbling
        event.stopPropagation();
        console.log("start clicked");

        start.setAttribute("style", "visibility: hidden");
        bigText.setAttribute("style", "visibility: hidden");
        timer.setAttribute("style", "visibility: visible");
        
        //start timer
        var secondsLeft = 76;
        // Sets interval in variable
        var timerInterval = setInterval(function() {
                secondsLeft--;
                time.textContent = secondsLeft;

                if(secondsLeft === 0) {
                clearInterval(timerInterval);
                alert("Game Over");
                // gameOver();
                }
        }, 1000);

        answer1.style.visibility = "visible";
        answer2.style.visibility = "visible";
        answer3.style.visibility = "visible";
        answer4.style.visibility = "visible";

        popQuestion();
}

function popQuestion(){
        var currentQuestion = questions[0];  //need a way to ++ this index number after each question, when index === 0 triggers gameOver()
        midText.textContent = currentQuestion.question;
        answer1.textContent = currentQuestion.response1;
        answer2.textContent = currentQuestion.response2;
        answer3.textContent = currentQuestion.response3;
        answer4.textContent = currentQuestion.response4;

        //need eventlisteners for each of these responses, and a way to compare the response to the answer, displays right/wrong, changes score or time, then loads next question
}

//gameOver function - when all questions finished or time runs out, displays "Your score is ____" and and input box to enter initials. Submit button loads high score page (same as View Highscores button)


start.addEventListener("click", startGame);


//Finishing last question or time running out triggers gameOver() to display with your high score, add initials input, and submit button.
        //Submit button enterInitials and high score to local memory and displays the high score listings

        // End Game page:
        // h1 Game Over!
        // h2 Your score is ____.
        // need to make a hidden HTML element for this vvvvv
        // Enter initials: (input box) Submit button

// High score listings displays and enumerates from local memory
        //clear button wipes local memory and re-displays high score page
        //play again button starts a new game

        // High Score page:
        // h1 High scores
        // Enumerated list of initials and scores
        // Play Again button Clear High Scores button 


// Functions To Make:
//         gameOver
//         enterInitials
//         clearScores
//         playAgain