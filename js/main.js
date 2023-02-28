let buttonLoad = document.querySelector('.button-load');
let circularProgress = document.querySelector('.circular-progress');
let progressValue = document.querySelector('.progress-value');
let progressStartValue = 0, progressEndValue = 100, speed = 40;

function load () {
    let progreess = setInterval(() => {

        buttonLoad.textContent = `Loading...`
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#7D2AE8 ${progressStartValue * 3.6}deg, #EDEDED 0deg)`;
    
        if (progressStartValue == progressEndValue) {
            clearInterval(progreess);
            progressStartValue = 0;
            buttonLoad.textContent = `Load`;
        }
    }, speed)
}

buttonLoad.addEventListener('click', load);