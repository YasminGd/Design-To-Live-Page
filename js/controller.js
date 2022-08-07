'use strict'
let isOpen = false

function onShowNav(elButton) {
    const elNavBar = document.querySelector('.main-nav-list')
    if (isOpen) {
        elButton.innerText = '☰'
        elNavBar.style.maxHeight = '0'
    } else {
        elButton.innerText = 'X'
        elNavBar.style.maxHeight = '50vh'
    }
    isOpen = !isOpen
}