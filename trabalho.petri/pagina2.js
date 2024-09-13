let angle = 0;
const spinner = document.querySelector('.spinner');

document.getElementById('next').addEventListener('click', () => {
    angle -= 72;
    spinner.style.transform = `rotateY(${angle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
    angle += 72;
    spinner.style.transform = `rotateY(${angle}deg)`;
});
