const slides = document.querySelectorAll(".slide");
const next_btn = document.querySelector(".next");
const previous_btn = document.querySelector(".previous");
const circle0 = document.querySelector('.circle0');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');

function opacity_Style(current) {
    slides.forEach(element => {
        element.style.opacity = '0';
    })
    slides[current].style.opacity = '1';
    if (current === 0) {
        circle0.style.backgroundColor = 'black';
        circle1.style.backgroundColor = 'beige';
        circle2.style.backgroundColor = 'beige';
        circle3.style.backgroundColor = 'beige';
    } else if (current === 1) {
        circle1.style.backgroundColor = 'black';
        circle0.style.backgroundColor = 'beige';
        circle2.style.backgroundColor = 'beige';
        circle3.style.backgroundColor = 'beige';
    } else if (current === 2){
        circle2.style.backgroundColor = 'black';
        circle0.style.backgroundColor = 'beige';
        circle1.style.backgroundColor = 'beige';
        circle3.style.backgroundColor = 'beige';
    } else {
        circle3.style.backgroundColor = 'black';
        circle0.style.backgroundColor = 'beige';
        circle1.style.backgroundColor = 'beige';
        circle2.style.backgroundColor = 'beige';
    }
}

let current = 0;
circle0.style.backgroundColor = 'black';
next_btn.addEventListener('click', () => {
    if (current === 3) {
        current = -1;
    }
    opacity_Style(current + 1);
    return current++;
})

previous_btn.addEventListener('click', () => {
    if (current === 0) {
        current = 4;
    }
    opacity_Style(current - 1);
    return current--;
})


circle0.addEventListener('click', () => {
    current = 0;
    opacity_Style(current);
    return current;
});
circle1.addEventListener('click', () => {
    current = 1;
    opacity_Style(current);
    return current;
});
circle2.addEventListener('click', () => {
    current = 2;
    opacity_Style(current);
    return current;
});
circle3.addEventListener('click', () => {
    current = 3;
    opacity_Style(current);
    return current;
});
