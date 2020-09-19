function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

var headerBlock = document.querySelector('.header');
var headerLink = document.querySelector('.header__link');
var headerMenu = document.querySelector('.site-navigation');
var headerButton = document.querySelector('.header__menu-button');

closeHeaderMenu = function () {
    headerMenu.classList.remove('header__site-navigation--opened');
    headerButton.classList.remove('header__menu-button--opened');
    headerBlock.classList.remove('header--blue');
    headerLink.classList.remove('header__link--white');
}

closeHeaderMenu();

headerButton.addEventListener('click', function (evt) {
    headerMenu.classList.toggle('header__site-navigation--opened');
    headerButton.classList.toggle('header__menu-button--opened');
    headerBlock.classList.toggle('header--blue');
    headerLink.classList.toggle('header__link--white');
});

const circle = document.querySelector('.round-progress__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const input = document.querySelector('.percent');

input.addEventListener('change', function() {
  setProgress(input.value);
})

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}
