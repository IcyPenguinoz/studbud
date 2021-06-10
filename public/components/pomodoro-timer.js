//code used from: https://codepen.io/nickpalmer789/pen/WQNRWY
//Need to have long break time after 4 cycles of 5 minute breaks then after long break - counter resets and it goes back to work mode
//Need to find a seperate condition apart from just working and !working or try to find a way to work around it 
//Added a seperate test value to properly ensure that based on test value - which is used to check buttton value - it will execute properly
//timerMode value used and worked, to properly fix issues with resetting time and switching times

$(document).ready(function() {
        //Declaration of variables at the top 
        var breakTime = 300; //Set in seconds
        var workTime = 1500; //Set in seconds
        var longBreakTime = 1800;
        var currentTime = workTime;
        var working = true; 
        var pause = true;
        var counter = 0;
        //timerMode value used in order to properly make shortBreakTime and longBreakTime modes work throughout the code
        var timerMode = 0; 
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
                //This is what switches the time - if currentTime = 0 and the countercycle is less than 4 and the person is working
                //Then switch to break-time
                } else if (working && currentTime == 0 && counter < 4) { 
                        //Colours issue fixed by dynamically changing value before it switches, to be able to change colour 
                        timerMode = 50; 
                        switchBreakTime(); 
                //Otherwise if the counter is equals to 4 suggesting that it has looped 4 times, then switch to the longBreakTime
                } else if (working && currentTime == 0 && counter == 4){ 
                        timerMode = 2;
                        switchLongBreakTime(); 
                } else{
                    //otherwise keep working/stay on working time
                    switchWorkTime(); 
                    console.log(working)
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
    
        //Toggles the appearance/colour of the buttons
        function toggleButtons() {
                if (!working && timerMode == 50) {
        
                        $("#shortBreakBtn")
                        $(".timer-rectangle2").css("background-image", "linear-gradient(red, yellow)");
                }else if (!working && timerMode == 2){ //background colour for longBreak doesn't seem to work
                        $("longBreakBtn")
                        $("#shortBreakBtn")
                        $(".timer-rectangle2").css("background", "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)");
                        
    
                } else{
                    $("#workBtn")
                    $("#shortBreakBtn")
                    $(".timer-rectangle2").css("background-image", "linear-gradient(to bottom right, rgba(81,209,131,1), rgba(96,181,212,1))");
                }  
        }
    
        //Switches the current time to break time 
        function switchBreakTime() {
                if (!working &&  timerMode == 2) {
                        return;
                }
                //Adds to counter cycle as it begins switching to the shortBreakTime
                counter = counter + 1;
                working = false;
                console.log(working);
                toggleButtons();
                currentTime = breakTime;
                displayTime();
                console.log (counter); 
        }
    
        //Switches from current time to long break time after 4 cycles
        function switchLongBreakTime(){
            if (!working && timerMode == 50) { //only seems to work when % pomodoroLoop === 0
                    return;
            }
    
            working = false;
            console.log(working);
            toggleButtons();
            currentTime = longBreakTime;
            displayTime();
            //Counter cycle is reset to 0 after user has a long break
            counter = 0;
            console.log (counter); 
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
                workTime = $("#workTime").val() * 60;
                breakTime = $("#breakTime").val() * 60;
                longBreakTime = $("#longbreakTime").val() * 60;
                //If the value inside labels are empty, then alert the user that they have not filled in the labels
                if (workTime == "" || breakTime == "" || longBreakTime == ""){
                    working = true;
                    alert("You have not filled in the time for the timer modes!"); //validation field alert
                }
                //Otherwise give feedback to user that the settings have been saved and added to times inside timer mode
                else{
                   working = false;
                   console.log(workTime);
                   alert("Settings saved and added to timer modes!");
                   switchWorkTime();
                }
                //Resets form after person submits pomodoro timing settings
                document.querySelector(".pomodoro-form").reset();
        });
    
        //Restart the timers
        $(".reset2-button").on("click", function() {
                if (working) {
                        working = false;
                        switchWorkTime();
                } else if (!working && timerMode == 2){
                        working = true;
                        switchLongBreakTime();
                } else if (!working && timerMode == 50){
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
                timerMode = 50;
                console.log(timerMode);
                switchBreakTime();
        
        });
    
        $("#longBreakBtn").on("click", function() {
            /*$("#breakBtn").removeClass("btn-primary").addClass("btn-default active");
            $("#workBtn").removeClass("btn-default active").addClass("btn-danger");*/
            timerMode = 2;
            console.log(timerMode);
            switchLongBreakTime();
    });
    
        
        //Toggle the pause variable when the pause button is clicked
        $(".start2-button").on("click", function() {
                 pause = false;
                
        })
    
        $(".stop2-button").on("click", function() {
            pause = true;
        })
    
    
    
    });