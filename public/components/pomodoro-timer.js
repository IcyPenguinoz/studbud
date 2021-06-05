//code used from: https://codepen.io/nickpalmer789/pen/WQNRWY
//Need to have long break time after 4 cycles of 5 minute breaks then after long break - counter resets and it goes back to work mode

$(document).ready(function() {
    var breakTime = 300; //In seconds
    var workTime = 1500; //In seconds
    var currentTime = workTime;
    var working = true;
    var pause = true;

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
            } else if (working && currentTime == 0) {
                    switchBreakTime();
            } else {
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

    //Toggles the appearance of the buttons while not making it spamable
    function toggleButtons() {
            if (!working) {
                    $("#breakBtn").removeClass("btn-primary").addClass("btn-default active");
                    $("#workBtn").removeClass("btn-default active").addClass("btn-danger");
                    $(".timer-rectangle2").css("background-image", "linear-gradient(red, yellow)");

            } else {
                    $("#workBtn").removeClass("btn-danger").addClass("btn-default active");
                    $("#breakBtn").removeClass("btn-primary active").addClass("btn-primary");
                    $(".timer-rectangle2").css("background-image", "linear-gradient(to bottom right, rgba(81,209,131,1), rgba(96,181,212,1))");
            }   
    }

    //Switches the current time to break time
    function switchBreakTime() {
            if (!working) {
                    return;
            }

            working = !working;
            toggleButtons();
            currentTime = breakTime;
            displayTime();
    }

    //Switches the current time to work time
    function switchWorkTime() {
            if (working) {
                    return;
            }

            working = !working;
            toggleButtons();
            currentTime = workTime;
            displayTime();
    }

    //Update the timer
    $("#updateBtn").on("click", function() {
            working = false;
            workTime = $("#workTime").val() * 60;
            breakTime = $("#breakTime").val() * 60;
            switchWorkTime();
            console.log(workTime);
    });

    //Restart the timer
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
    $("#breakBtn").on("click", function() {
            /*$("#breakBtn").removeClass("btn-primary").addClass("btn-default active");
            $("#workBtn").removeClass("btn-default active").addClass("btn-danger");*/
            switchBreakTime();
    });
    
    //Toggle the pause var when the pause button is clicked
    $(".start2-button").on("click", function() {
            pause = false;
            
    })

    $(".stop2-button").on("click", function() {
        pause = true;
    })



});