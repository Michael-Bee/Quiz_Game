var start = document.querySelector("#startButton");
var questionsIndex = questions.length;
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


function startGame(event){
        //stop bubbling
        event.stopPropagation();
        console.log("start clicked");

        start.setAttribute("style", "visibility: hidden");
        bigText.setAttribute("style", "visibility: hidden");
        timer.setAttribute("style", "visibility: visible");
        
        //start timer
        var secondsLeft = 75;
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
}


//gameOver function - when all questions finished or time runs out, displays "Your score is ____" and and input box to enter initials. Submit button loads high score page (same as View Highscores button)


start.addEventListener("click", startGame);


//Finishing last question or time running out triggers all done page to display with your high score, add initials input, and submit button.
        //Submit button adds initials and high score to local memory and displays the high score listings

// High score listings displays and enumerates from local memory
        //clear button wipes local memory and re-displays high score page
        //play again button starts a new game



// Questions page:
// h2 Multiple Choice Question
// 1. answer <button>
// 2. answer button
// 3. answer button
// 4. answer button

// (displays on click depending on true/false answer)
// Correct! or Incorrect!
//         compare selected button value 1,2,3,4 to answer 
//         if === , then add 5 to score
//         if !=== , then subtract 10 from time

// End Game page:
// h1 Game Over!
// h2 Your score is ____.
// need to make a hidden HTML element for this vvvvv
// Enter initials: (input box) Submit button


// High Score page:
// h1 High scores
// Enumerated list of initials and scores
// Play Again button Clear High Scores button 


// Functions:
//         Render Questions
//         Render Scores
//         End Game
//         Enter Initials
//         Clear Scores
//         Play Again