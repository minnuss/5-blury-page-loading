const percentage = document.querySelector('.page__loading-percentage');
const page = document.querySelector('.page');

// num increment
let load = 0;
// num opacity decrement
let opacity = 1;

function loadPrecentage() {
    load++;
    // console.log(load)
    // if load value greater then 99, clear interval
    if (load > 99) {
        clearInterval(intPercentage);
    }

    // add num value on page - increment
    percentage.innerHTML = `${load}%`;

    // decrease opacity value
    opacity -= 0.0099;
    // console.log(opacity)
    percentage.style.opacity = opacity;
}

let intPercentage = setInterval(loadPrecentage, 45);

// blur value of page loading
let blurPage = 30;

function blur() {
    // if blur value is lower then 1, clear interval
    if (blur < 1) {
        clearInterval(intBlur);
    }

    // blue value decrease by 1;
    blurPage -= 1;
    page.style.filter = `blur(${blurPage}px)`;
}

let intBlur = setInterval(blur, 145);