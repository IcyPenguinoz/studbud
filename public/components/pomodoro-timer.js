//code used from: https://codepen.io/nickpalmer789/pen/WQNRWY
//Need to have long break time after 4 cycles of 5 minute breaks then after long break - counter resets and it goes back to work mode

$(document).ready(function() {
        var breakTime = 300; //In seconds
        var workTime = 1500; //In seconds
        var longBreakTime = 1800;
        var currentTime = workTime;
        var working = true;
        var pause = true;
        var counter = 0;
        //var pomodoroLoop = 5;
    
        //Sound for timer ring 
        //May be blocked if you are going through a proxy server
        //var audioElement = document.createElement('audio');
        //audioElement.setAttribute('src', 'http://allowe.com/download/audio/soundfx/LSL7%20Ding.wav');
    
        //Display the initial amount of time
        displayTime();
    
        setInterval(function() {
                checkTime();
        }, 1000);
    
        //Checks whether the time is up or not
        function checkTime() {
                if (pause) {
                        return;
                }
                if (currentTime >= 1) {
                        currentTime--;
                        displayTime();
                } else if (working && currentTime == 0 && counter < 4 ) { //This is what switches the time - if currentTime = 0 and the person is working
                    //then switch to break-time
                        switchBreakTime();
                } else if (working && currentTime == 0 && counter == 4){ //otherwise keep working/stay on working - works when counter is set at 5 HOWEVER becomes stuck there
                        switchLongBreakTime();
                } else{
                    switchWorkTime(); 
                }
        }
    
        //Displays the current time based on the number of seconds left
        function displayTime() {
                //Calculate the number of minutes and seconds based on the current time
                var min = Math.floor(currentTime / 60);
                var sec = Math.floor(currentTime % 60);
    
                //Add a 0 to the front of the second when appropriate
                if (sec < 10) {
                        sec = "0" + sec;
                }
    
                $("#time-text").text(min + ":" + sec);
        }
    
        //Toggles the appearance of the buttons while not making it spamable - problem, background colour not changing
        function toggleButtons() {
                if (!working) {
                        $("#workBtn").removeClass("btn-danger").addClass("btn-default active");
                        $("#shortBreakBtn").removeClass("btn-primary active").addClass("btn-primary");
                        $(".timer-rectangle2").css("background-image", "linear-gradient(red, yellow)");
                }else if (working && !working){ //background colour for longBreak doesn't seem to work
                        $("longBreakBtn").removeClass("btn-danger").addClass("btn-default active");
                        $("#shortBreakBtn").removeClass("btn-primary active").addClass("btn-primary");
                        $(".timer-rectangle2").css("background", "rgb(131,58,180)");
    
                } else{
                    $("#workBtn").removeClass("btn-danger").addClass("btn-default active");
                    $("#shortBreakBtn").removeClass("btn-primary active").addClass("btn-primary");
                    $(".timer-rectangle2").css("background-image", "linear-gradient(to bottom right, rgba(81,209,131,1), rgba(96,181,212,1))");
                }  
        }
    
        //Switches the current time to break time 
        function switchBreakTime() {
                if (!working && counter < 5) {
                        return;
                }
    
                counter = counter + 1;
                working = false;
                console.log(working);
                toggleButtons();
                currentTime = breakTime;
                displayTime();
                console.log (counter); //counter will be used to determine cycles if after 4 cycles of short break then 30 min long break
        }
    
        //switches from current time to long break time after 4 cycles  problem, not working when switching to short break time
        function switchLongBreakTime(){
            if (!working && counter == 5) { //only seems to work when % pomodoroLoop === 0
                    return;
            }
    
            working = false;
            console.log(working);
            toggleButtons();
            currentTime = longBreakTime;
            displayTime();
            counter = 0;
            console.log (counter); //counter will be used to determine cycles if after 4 cycles of short break then 30 min long break
        }    
    
        //Switches the current time to work time
        function switchWorkTime() {
                if (working) {
                        return;
                }
    
                working = true;
                console.log(working);
                toggleButtons();
                currentTime = workTime;
                displayTime();
        }
        
        /*
        if (counter = 0){
                switchWorkTime();
        } else if (counter < 5){
                switchBreakTime();
        } else{
                switchLongBreakTime;
        }
        */
    
    
        //Update the timer
        $("#updateBtn").on("click", function() {
                working = false;
                workTime = $("#workTime").val() * 60;
                breakTime = $("#breakTime").val() * 60;
                longBreakTime = $("#longbreakTime").val() * 60;
                switchWorkTime();
                console.log(workTime);
        });
    
        //Restart the timer - problem is also with reset - on long break time it resets to short break time 
        $(".reset2-button").on("click", function() {
                if (working) {
                        working = false;
                        switchWorkTime();
                } else {
                        working = true;
                        switchBreakTime();
                }
        });
    
        //Toggling button when you click on the work button
        $("#workBtn").on("click", function() {
                /*$("#workBtn").removeClass("btn-danger").addClass("btn-default active");
                $("#breakBtn").removeClass("btn-primary active").addClass("btn-primary");*/
                switchWorkTime();
        });
    
        //Toggling button when you click on the break button
        $("#shortBreakBtn").on("click", function() {
                /*$("#breakBtn").removeClass("btn-primary").addClass("btn-default active");
                $("#workBtn").removeClass("btn-default active").addClass("btn-danger");*/
                switchBreakTime();
        });
    
        $("#longBreakBtn").on("click", function() {
            /*$("#breakBtn").removeClass("btn-primary").addClass("btn-default active");
            $("#workBtn").removeClass("btn-default active").addClass("btn-danger");*/
            switchLongBreakTime();
    });
    
        
        //Toggle the pause var when the pause button is clicked
        $(".start2-button").on("click", function() {
                pause = false;
                
        })
    
        $(".stop2-button").on("click", function() {
            pause = true;
        })
    
    
    
    });