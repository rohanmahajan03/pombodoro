function countdown(isWorking){
    
    // format is 1000 * seconds * minutes + 1000
    if(isWorking){
        var future = Date.now() + 1000 * 10 + 1000;
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
        console.log(isWorking);
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
            countdown(isWorking);
        }
        
    }
    else{
        
        let minutesRemaining = Math.floor(timeLeft / (1000 * 60));
        let secondsRemaining = Math.floor((timeLeft - (1000 * 60 * minutesRemaining)) / 1000);
        if(isWorking){
            if(secondsRemaining < 10){
                console.log("less than 10");
                document.getElementById("timer").innerHTML = "Still working for " + minutesRemaining + ":0" + secondsRemaining;
            }
            else{
                document.getElementById("timer").innerHTML = "Still working for " + minutesRemaining +  ":"  + secondsRemaining;
            }
        }
        else{
            if(secondsRemaining < 10){
                console.log("less than 10");
                document.getElementById("timer").innerHTML = "On break for " + minutesRemaining + ":0" + secondsRemaining;
            }
            else{
                document.getElementById("timer").innerHTML = "On break for " + minutesRemaining +  ":"  + secondsRemaining;
            }
        }
        
        
    }

}


var isWorking = true;

document.getElementById('startButton').addEventListener('click', function() {
    if(document.getElementById('startButton').innerHTML == 'Start Study Session'){
        document.getElementById('startButton').innerHTML = 'End Study Session';
        countdown(isWorking);
    }
    else{
        document.getElementById('startButton').innerHTML = 'Start Study Session'
        
    }
        
3});
    // document.addEventListener("DOMContentLoaded", function() {});



