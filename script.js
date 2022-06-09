'use strict';

let brandDark = document.querySelector('.brandDark');

let headerList = document.querySelector('.headerList');

let menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

headerList.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);