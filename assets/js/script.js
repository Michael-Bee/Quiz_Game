var start = document.querySelector("#startButton");
start.setAttribute("style", "visibility: visible")



function renderQuestion(event){
        //stop bubbling
        event.stopPropagation();

        console.log("start clicked")

        start.setAttribute("style", "visibility: hidden")
        bigText.setAttribute("style", "visibility: hidden")
        timer.setAttribute("style", "visibility: visible")
        //start timer
}


//Game Over function - when all questions finished or time runs out, displays "Your score is ____" and and input box to enter initials. Submit button loads high score page (same as View Highscores button)


start.addEventListener("click", renderQuestion);




//First page: HS and Timer are visible. Title, game description and rules with time penalty, start game button. 

//Questions pages: need function that populates the question in h2, adds 4 buttons with answers, all buttons need their own event listener that triggers an if/else. 
        //A false answer triggers display of wrong, takes 5 seconds off timer, and loads the next question. 
        //A true answer displays right and loads the next question.

//Finishing last question or time running out triggers all done page to display with your high score, add initials input, and submit button.
        //Submit button adds initials and high score to local memory and displays the high score listings

// High score listings displays and enumerates from local memory
        //clear button wipes local memory and re-displays high score page
        //play again button starts a new game