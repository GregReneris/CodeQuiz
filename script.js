


var timeRemaining;


function startUp(){
    console.log("started");

    document.getElementById("questionPage").hidden = false;
    document.getElementById("highScoreList").hidden = true;
    document.getElementById("highScoreInput").hidden = true;
    document.getElementById("startPage").hidden = true;

    timeRemaining = 76;
    timerTick();
    setInterval(timerTick, 1000);
    
}

function timerTick(){
    timeRemaining = timeRemaining-1;

    document.getElementById("timeRemaining").textContent = "Time: " + timeRemaining;

console.log(timerTick);
}

