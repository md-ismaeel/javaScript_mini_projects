const display = document.getElementById('display');
const controls = document.getElementById('controls');

const msbRegex = /^[0-5]$/;
const lsbRegex = /^[0-9]$/;

let minutes = 0;
let seconds = 0;
let intervalId;

const minMSB = document.getElementById('minMSB');
const minLSB = document.getElementById('minLSB');
const secMSB = document.getElementById('secMSB');
const secLSB = document.getElementById('secLSB');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function onClick(event) {
    console.log(event);

    if (event.target.tagName === 'INPUT') {
        event.target.select();
    } else if (event.target.id === 'start') {
        onStart();
    } else if (event.target.id === 'stop') {
        onStop();
    } else if (event.target.id === 'reset') {
        onReset();
    }
}

function onStart() {
    setControls(true, false);
    display.classList.add('progress');
    setInputsDisabledStatus(true);
    setTime();
    startTimer();
}

function onStop() {
    setControls(false, true);
    display.classList.remove('progress');
    setInputsDisabledStatus(false);
    clearInterval(intervalId);
}

function onReset() {
    setControls(false, true);
    resetControls();
    resetTimerValue();
}

function setControls(startStatus = false, stopStatus = false) {
    startButton.disabled = startStatus;
    stopButton.disabled = stopStatus;
}

function onInput(event) {
    const value = Number(event.data);

    if (typeof value === 'number') {
        if (event.target.id === 'minMSB' || event.target.id === 'secMSB') {
            onValueEntry(msbRegex, event.target, value);
        } else if (event.target.id === 'minLSB' || event.target.id === 'secLSB') {
            onValueEntry(lsbRegex, event.target, value);
        }
    }
}

function onValueEntry(regex, target, value) {
    if (regex.test(value)) {
        target.value = value;
        target.nextElementSibling?.focus();
        target.nextElementSibling?.select();
    } else {
        target.value = 0;
        target.select();
    }
}

function setInputsDisabledStatus(isDisabled = false) {
    minMSB.disabled = isDisabled;
    minLSB.disabled = isDisabled;
    secMSB.disabled = isDisabled;
    secLSB.disabled = isDisabled;
}

function resetControls() {
    clearInterval(intervalId);
    display.classList.remove('progress');
    setInputsDisabledStatus(false);
}

function resetTimerValue() {
    minMSB.value = 0;
    minLSB.value = 0;
    secMSB.value = 0;
    secLSB.value = 0;
}

function setTime() {
    minutes = +(minMSB.value + minLSB.value);
    seconds = +(secMSB.value + secLSB.value);
}

function startTimer() {
    if (minutes === 0 && seconds === 0) {
        onReset();
        return;
    }

    intervalId = setInterval(() => {
        seconds -= 1;

        if (seconds < 0) {
            seconds = 59;
            minutes -= 1;
        }

        if (minutes === 0 && seconds === 0) {
            onReset();
        }

        setDisplay(minutes, seconds);
    }, 1000);
}

function setDisplay(mins, secs) {
    [minMSB.value, minLSB.value] = String(mins).padStart(2, '0').split('');
    [secMSB.value, secLSB.value] = String(secs).padStart(2, '0').split('');
}

display.addEventListener('input', onInput);
document.body.addEventListener('click', onClick);
