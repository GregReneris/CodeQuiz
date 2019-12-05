



var timerID;
var timeRemaining;
var quizPageIndex;
var highScoreArray = [];

var questionPage = document.querySelector("#questionPage");
var highScoreListPage = document.querySelector("#highScoreList");
var initialsInputPage = document.querySelector("initialsInput");
var startPagePage = document.querySelector("#startPage");
var correctoPage = document.querySelector("#correcto");
var correctoMessage = document.querySelector("#correctoMessage");


// // whatever is happening here is not working
// correctoMessage.addEventListener("input", function(event){
//     console.log("something");
// });


function startUp(){
    // console.log("started");

    questionPage.hidden = false;
    document.getElementById("highScoreList").hidden = true;
    document.getElementById("initialsInput").hidden = true;
    document.getElementById("startPage").hidden = true;
    // correctoPage.hidden = true;

    timeRemaining = 76;
    timerTick();
    timerID = setInterval(timerTick, 1000);
    startQuizPage(0);    
}

function timerTick(){
   timeElapsed(1);
    

    
    // console.log(timerTick);
}


function timeElapsed(elapsedTime){
    timeRemaining = timeRemaining-elapsedTime;
    document.getElementById("timeRemaining").textContent = "Time: " + timeRemaining;
    if (timeRemaining <= 0){
        console.log("game over");
        clearInterval(timerID);
    }


}




function startQuizPage(whichPage) {
    console.log ("The Quiz is Starting");
    quizPageIndex = whichPage;
    page = questions[quizPageIndex];
    document.getElementById("questionTitle").textContent = page.title;
    for (let index = 0; index < 4; index++){
        document.getElementById("quizButton"+index).textContent = page.choices[index];

    }
    


}

function quizButton(whichButton) {
    console.log( "Button Pressed:" + questions[quizPageIndex].choices[whichButton] );
    // check button text string needs to match answer text string.
    if (questions[quizPageIndex].answer == questions[quizPageIndex].choices[whichButton]) {
        correctoPage.hidden = false;
        correctoMessage.textContent = "Correct";

    }

    else {
        correctoPage.hidden = false;
        correctoMessage.textContent = "Incorrect";
        timeElapsed(15);

    }

    if(quizPageIndex+1 <questions.length){
        startQuizPage(quizPageIndex+1);

    } else {
        // Turn off all the questions, ask what your initials are, stop the timer
        clearInterval(timerID);
        document.getElementById("initialsInput").hidden = false;
        document.getElementById("questionPage").hidden = true;
        
    }


}

function addScore(){
    var initials = document.querySelector("#initialInputText").value;
    var userScore = initials + " - " + timeRemaining;
    highScoreArray.push(userScore);
    localStorage.setItem("highscores", JSON.stringify(highScoreArray));
    

}





// var storageArray= JSON.parse(localStorage.getItem("description"));
//     storageArray.push(event.target.value);
//     // line 21 is apparently broken. Gotta go over it.
//     localStorage.setItem("description", JSON.stringify(storageArray));