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

// Progressive enhan
closeHeaderMenu();

headerButton.addEventListener('click', function (evt) {
    headerMenu.classList.toggle('header__site-navigation--opened');
    headerButton.classList.toggle('header__menu-button--opened');
    headerBlock.classList.toggle('header--blue');
    headerLink.classList.toggle('header__link--white');
});