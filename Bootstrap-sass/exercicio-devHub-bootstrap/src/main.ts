import "./scss/style.scss"


import { Dropdown, Modal, Carousel, Button, } from 'bootstrap'


const themeSwitcher = document.getElementById('themeSwitcher');
themeSwitcher?.addEventListener('click', () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-bs-theme', newTheme);
});


const btnModal = document.getElementById('btn-open-modal');

btnModal?.addEventListener('click', () => {
    const textArea = document.getElementById('modal-textarea');
    setTimeout(() => {
        textArea?.focus();
    }, 500);
});