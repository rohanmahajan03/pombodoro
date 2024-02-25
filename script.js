var audio = new Audio('pigeon-sound.mp3');

function countdown(isWorking){
    
    // format is 1000 * seconds * minutes + 1000
    if(isWorking){
        var future = Date.now() + 1000 * 3 + 1000;
    }
    else{
        var future = Date.now() + 1000 * 5 + 1000
    }
    

    var intervalTimeLeft = setInterval(function() {
        displayRemainingTime(future, intervalTimeLeft, isWorking);
    }, 1000);  
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function displayRemainingTime(future, intervalTimeLeft, isWorking){
    let timeLeft = future - Date.now();
    console.log("entering displayRemainingTime");
    if(timeLeft <= 0){
        clearInterval(intervalTimeLeft);
        logo.style.display = "none";
        bottomRightImage.style.display = "none";
        console.log(isWorking);
        audio.play();
        if(isWorking){
            document.getElementById("timer").innerHTML = "Break Time!";
            await sleep(2000);
            isWorking = !isWorking;
            countdown(isWorking);

        }
        else{
            document.getElementById("timer").innerHTML = "Get Back To Work!";
            await sleep(2000);
            isWorking = !isWorking;
            // logo.style.display = "inline";
            // bottomRightImage.style.display = "inline";
            countdown(isWorking);
        }
        
    }
    else{
        logo.style.display = "inline";
        bottomRightImage.style.display = "inline";
        let minutesRemaining = Math.floor(timeLeft / (1000 * 60));
        let secondsRemaining = Math.floor((timeLeft - (1000 * 60 * minutesRemaining)) / 1000);
        if(isWorking){
            if(secondsRemaining < 10){
                console.log("less than 10");
                document.getElementById("description").innerHTML = "Keep working for";
                document.getElementById("timer").innerHTML = minutesRemaining + ":0" + secondsRemaining;
            }
            else{
                document.getElementById("description").innerHTML = "Keep working for";
                document.getElementById("timer").innerHTML = minutesRemaining +  ":"  + secondsRemaining;
            }
        }
        else{
            if(secondsRemaining < 10){
                console.log("less than 10");
                document.getElementById("description").innerHTML = "On break for";
                document.getElementById("timer").innerHTML = minutesRemaining + ":0" + secondsRemaining;
            }
            else{
                document.getElementById("description").innerHTML = "Keep working for";
                document.getElementById("timer").innerHTML = minutesRemaining +  ":"  + secondsRemaining;
            }
        }
        
        
    }

}

var intervalTimeLeft;
var isWorking = true;

var logo = document.getElementById('logo');
var bottomRightImage = document.getElementById('bentancur');

audio.play();

document.getElementById('startButton').addEventListener('click', function() {
    if(document.getElementById('startButton').innerHTML == 'Start Studying!'){
        document.getElementById('startButton').innerHTML = 'End Study Session';
        countdown(isWorking);
        var buttonFinished = document.getElementById('startButton');
        buttonFinished.style.display = 'none'
        // document.getElementById('description').innerHTML = "*Close extention to stop studying*";

        var pombo = document.getElementById('pombo');
        var sonny = document.getElementById('sonny');
        pombo.style.display = 'inline';
        sonny.style.display = 'inline';
        
        logo = document.getElementById('logo');
        logo.style.display = 'inline';

        bottomRightImage = document.getElementById("bentancur");
        bottomRightImage.style.display = 'inline';

    }
    else{
        
        
        
        // document.getElementById('startButton').innerHTML = 'Start Study Session';

    }
        
3});
    // document.addEventListener("DOMContentLoaded", function() {});



