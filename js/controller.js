'use strict'
let isOpen = false

function onShowNav(elButton) {
    const elNavBar = document.querySelector('.main-nav-list')
    const elHeader = document.querySelector('.main-header')
    if (isOpen) {
        elButton.innerText = '☰'
        elNavBar.style.maxHeight = '0'
        elHeader.style.boxShadow = '0 -6px 0 0 var(--clr8) inset'
    } else {
        elButton.innerText = 'X'
        elNavBar.style.maxHeight = '50vh'
        elHeader.style.boxShadow = '0 -6px 0 0 var(--clr2) inset'
    }
    isOpen = !isOpen
}