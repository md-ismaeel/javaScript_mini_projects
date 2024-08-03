const btnController = document.querySelector(".btn-container");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const progressBar = document.querySelector(".progressBar");

let interval;
let progress = 0;


function start() {
    if (!interval) {
        interval = setInterval(() => {
            if (progress < 100) {
                progress++;
                progressBar.style.width = progress + '%';
            } else {
                clearInterval(interval);
                interval = null;
            }
        }, 200);
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    clearInterval(interval);
    interval = null;
    progress = 0;
    progressBar.style.width = '0%';
}


btnController.addEventListener("click", function (e) {
    const classList = e.target.classList
    // console.log(classList)

    if (classList.contains("start")) {
        start();
    } else if (classList.contains("stop")) {
        stop()
    } else if (classList.contains("reset")) {
        reset()
    }

})