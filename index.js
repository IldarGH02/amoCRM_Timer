const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    let timer;
    return (seconds) => {
        clearInterval(timer)
        timer = setInterval(() => {
            let hours = Math.trunc(seconds/60/60%60)
            let minuts = Math.trunc(seconds/60%60)
            let second = seconds%60

            second = second < 10 ? '0' + second : second
            minuts = minuts < 10 ? '0' + minuts : minuts
            hours = hours < 10 ? '0' + hours : hours

            if(--seconds <= 0) {
                clearInterval(timer)
                alert('Время вышло')
            } else {
                let time = `${hours}:${minuts}:${second}`
                timerEl.innerHTML = time              
            }
        }, 1000)
    };
};

inputEl.addEventListener('input', (e) => {
    let regx = /^\d+$/
    const value = e.target.value

    if(!regx.test(value)) {
        alert('Должно быть число') 
        e.target.value = value.replace(/[^\d]/g, '')   
    }
});

const animateTimer = createTimerAnimator();

buttonEl.addEventListener('click', () => {
    if (inputEl.value.length > 16){
        alert('Не более 16 чисел')
        inputEl.value = ''        
    } 

    if(inputEl.value.length > 0) {
        const seconds = Number(inputEl.value);

        animateTimer(seconds);
        inputEl.value = '';
    } else {
        alert('Заполните поле')
    }
    
    
});
