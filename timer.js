function startTimer() {
    let timeLeft = 120; 
    const timerDisplay = document.getElementById('timer');

    const countdown = setInterval(() => {
        const minutes = (timeLeft / 60) | 0;
        const seconds = timeLeft % 60;

        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft-- <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}


window.onload = startTimer;