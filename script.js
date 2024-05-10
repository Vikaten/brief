const button_bw = document.querySelector('.button-black-white');
const button = document.querySelectorAll('.button-for-dark-mode');
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');
const aboutMe = document.querySelectorAll('.item');
const links = document.querySelectorAll('.link');
const arrow = document.querySelector('.header-arrow');
let isDarkMode = false;

const contacts = document.querySelector('.my-contacts');
button_bw.addEventListener('click', () => {
    if(!isDarkMode) {
        toDarkMode();
    }
})

button_bw.addEventListener('click', () => {
    if (isDarkMode) {
        toLightMode();
    }
});

function toDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    main.classList.add('dark-mode');
    footer.style.backgroundColor = '#202020';
    links.forEach(link => {
        link.style.color = 'white';
    }); 
    aboutMe.forEach(el => {
        el.style.color = 'black';
    });
    button_bw.style.borderColor = 'white' ;
    isDarkMode = true;
}

function toLightMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    main.classList.remove('dark-mode');
    footer.style.backgroundColor = '#eeeeee';
    links.forEach(link => {
        link.style.color = 'black';
    }); 
    aboutMe.forEach(el => {
        el.style.color = 'white';
    });
    button_bw.style.borderColor = 'black';
    isDarkMode = false;
}


button.forEach(btn => {
    btn.onmouseover = () => {
        if (isDarkMode) {
            btn.style.color = 'white';
            arrow.setAttribute('src', 'assets/arrow-white.png')
        }
    }

    btn.onmouseleave = () => {
        if (isDarkMode) {
            btn.style.color = 'black';
            arrow.setAttribute('src', 'assets/arrow-black.png')
        }
    }
});

