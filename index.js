// JavaScript for the burger menu

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    toggleBars();
});

function toggleBars() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('change');
    });
}
