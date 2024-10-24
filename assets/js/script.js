const button = document.getElementById('btn-show-timer');
const timer = document.getElementById('timer');

let timerInterval;

function startTimer() {
    const now = Date.now();
    const launchTime = new Date('January 1, 2023 00:00:00 UTC').getTime();
    const timeLeft = (launchTime - now) / 1000; // convert milliseconds to seconds

    const days = Math.floor(timeLeft / 86400); // 86400 = 24 * 60 * 60 (number of seconds in a day)
    const hours = Math.floor((timeLeft % 86400) / 3600); // 3600 = 60 * 60 (number of seconds in an hour)
    const minutes = Math.floor((timeLeft % 3600) / 60); // 60 = number of seconds in a minute
    const seconds = timeLeft % 60;

    timer.innerHTML = `
        <span>${days} days</span>
        <span>${hours} hours</span>
        <span>${minutes} minutes</span>
        <span>${seconds} seconds</span>
    `;

    timerInterval = setInterval(() => {
        startTimer();
    }, 1000); // update timer every second
}

button.addEventListener('click', () => {
    if (!timerInterval) {
        startTimer();
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
    }
});