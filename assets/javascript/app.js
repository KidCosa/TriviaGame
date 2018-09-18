// I hit a very large wall with this HW. I cannot figure out how to take the value from the selcted radio button.
// I know how to check values against other values I just can't figure out how I would grab the selected radio button's value in the html.
// I will need some definite 1 on 1 help with this so that going forward I know what I'm doing.
$(document).ready(function(){
    var timer = 10;
    var timerID;
    var correct = 0;
    var incorrect = 0;
    $("#timeLeft").html("<h2>The time left is: " + timer + " seconds</h2>");
    function timeCountdown() {
        clearInterval(timerID);
        timerID = setInterval(decrement, 1000);
    };
    function decrement() {
        timer--;
        $("#timeLeft").html("<h2>The time left is: " + timer + " seconds</h2>");
        if (timer === 0) {
            stop();
            $("#timeLeft").html("<h2>TIME'S UP!</h2>");
        };
    };
    function stop() {
        clearInterval(timerID);
    };
    function quizAnswers() {

    }
    timeCountdown();
});