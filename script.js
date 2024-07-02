let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let lapCounter = 1;

    function startStop() {
        if (!timer) {
            timer = setInterval(incrementTime, 10);
            document.getElementById("startStop").textContent = "Stop";
        } else {
            clearInterval(timer);
            timer = null;
            document.getElementById("startStop").textContent = "Start";
        }
    }

    function incrementTime() {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        displayTime();
    }

    function displayTime() {
        document.getElementById("hours").textContent = padZero(hours);
        document.getElementById("minutes").textContent = padZero(minutes);
        document.getElementById("seconds").textContent = padZero(seconds);
        document.getElementById("milliseconds").textContent = padMilliseconds(milliseconds);
    }

    function padZero(num) {
        return (num < 10) ? "0" + num : num;
    }

    function padMilliseconds(num) {
        if (num < 10) return "00" + num;
        if (num < 100) return "0" + num;
        return num;
    }

    function lapReset() {
        if (timer) {
            const lapTime = document.createElement("div");
            lapTime.textContent = `Lap ${lapCounter}: ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padMilliseconds(milliseconds)}`;
            document.querySelector(".lapTimes").appendChild(lapTime);
            lapCounter++;
        } else {
            hours = 0;
            minutes = 0;
            seconds = 0;
            milliseconds = 0;
            lapCounter = 1;
            displayTime();
            document.querySelector(".lapTimes").innerHTML = "";
        }
    }

    function restart() {
        clearInterval(timer);
        timer = null;
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        lapCounter = 1;
        displayTime();
        document.getElementById("startStop").textContent = "Start";
        document.querySelector(".lapTimes").innerHTML = "";
    }