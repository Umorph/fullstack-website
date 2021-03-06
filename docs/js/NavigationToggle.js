let headerBlock = document.querySelector('.header'),
    headerLink = document.querySelector('.header__link'),
    headerMenu = document.querySelector('.site-navigation'),
    headerButton = document.querySelector('.header__menu-button');

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