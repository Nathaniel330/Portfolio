const inspiringExpression = document.querySelector('#dictumTarget')
fetch('https://lucky-ox-bell-bottoms.cyclic.app/https://api.fisenko.net/v1/quotes/en/random')
    .then(response => response.json())
    .then(data => {
        inspiringExpression.textContent = `${data.text} ~${data.author.name}`
    })

const navBrand = document.querySelector('.navbar-brand')
const navFirst = document.querySelector('.nav-first')
const navSecond = document.querySelector('.nav-second')
const navThird = document.querySelector('.nav-third')
const navFourth = document.querySelector('.nav-fourth')
const navFifth = document.querySelector('.nav-fifth')
const navToggler = document.querySelector('.navbar-toggler')
const navItems = document.getElementsByClassName('nav-item')


const heroH2 = document.querySelector('.hero__h2')
const heroH1 = document.querySelector('.hero__h1')
const heroH3 = document.querySelector('.hero__h3')
const heroText = document.querySelector('.hero__text')
const heroLine = document.querySelector('.hero__line')
const hero = document.getElementsByClassName('hero')


const mainContainer = document.querySelector('.main-container')


const sides = document.getElementsByClassName('side')

navBrand.style.visibility = "hidden"
navToggler.style.visibility = "hidden"

for (element of navItems) {
    element.style.visibility = "hidden"
}

for (element of hero) {
    element.style.visibility = "hidden"
}

for (element of sides) {
    element.style.visibility = "hidden"
}

navBrand.style.visibility = "visible"
navBrand.classList.add('animate__animated', 'animate__backInUp');
navBrand.addEventListener('animationend', () => {
    navToggler.style.visibility = "visible"
    navToggler.classList.add('animate__animated', 'animate__backInUp');

    
    navFirst.style.visibility = "visible"
    navFirst.classList.add('animate__animated', 'animate__fadeInDown');


    navFirst.addEventListener('animationend', () => {
    navSecond.style.visibility = "visible"
    navSecond.classList.add('animate__animated', 'animate__fadeInDown');
    });

    navSecond.addEventListener('animationend', () => {
        navThird.style.visibility = "visible"
        navThird.classList.add('animate__animated', 'animate__fadeInDown');
    });
    
    navThird.addEventListener('animationend', () => {
        navFourth.style.visibility = "visible"
        navFourth.classList.add('animate__animated', 'animate__fadeInDown');
    });
    navFourth.addEventListener('animationend', () => {
        navFifth.style.visibility = "visible"
        navFifth.classList.add('animate__animated', 'animate__fadeInDown');
    });
    navFifth.addEventListener('animationend', () => {
        heroH2.style.visibility = "visible"
        heroH2.style.setProperty('--animate-duration', '600ms');
        heroH2.classList.add('animate__animated', 'animate__fadeIn');
    });
    heroH2.addEventListener('animationend', () => {
        heroH1.style.visibility = "visible"
        heroH1.style.setProperty('--animate-duration', '600ms');
        heroH1.classList.add('animate__animated', 'animate__fadeIn');
    });
    heroH1.addEventListener('animationend', () => {
        heroH3.style.visibility = "visible"
        heroH3.style.setProperty('--animate-duration', '600ms');
        heroH3.classList.add('animate__animated', 'animate__fadeIn');
    });
    heroH3.addEventListener('animationend', () => {
        heroText.style.visibility = "visible"
        heroText.style.setProperty('--animate-duration', '600ms');
        heroText.classList.add('animate__animated', 'animate__fadeIn');
    });
    heroText.addEventListener('animationend', () => {
        heroLine.style.visibility = "visible"
        heroLine.style.setProperty('--animate-duration', '600ms');
        heroLine.classList.add('animate__animated', 'animate__fadeIn');
    });
    // heroLine.addEventListener('animationend', () => {
    //     mainContainer.style.visibility = "visible"
    //     mainContainer.style.setProperty('--animate-duration', '1s');
    //     mainContainer.classList.add('animate__animated', 'animate__flash');
    // });
    heroLine.addEventListener('animationend', () => {
        for (element of sides) {
            element.style.visibility = "visible"
            element.classList.add('animate__animated', 'animate__fadeIn');
        }
        // mainContainer.style.setProperty('--animate-duration', '1s');
    });
});


// animate__fadeIn