const button_wd = document.querySelector('.button-black-white');
const button = document.querySelector('.buttone');
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');
const aboutMe = document.querySelectorAll('.item');
const links = document.querySelectorAll('.link');

const contacts = document.querySelector('.my-contacts');
button_wd.addEventListener('click', () => {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    main.classList.add('dark-mode');
    footer.style.backgroundColor = '#202020'
    links.forEach(link => {
        link.style.color = 'white';
    }); 
    aboutMe.forEach(el => {
        el.style.color = 'black';
    });
    button_wd.style.borderColor = 'white' ;
    button.mouseover = (e) => {
        e.style.color = 'white';
    }
})

