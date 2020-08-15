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

const headerMenuButton = document.querySelector('.header__menu-button'),
    headerNavigation = document.querySelector('.header__site-navigation'),
    firstMenuLine = document.querySelector('.button-image__line-first'),
    secondMenuLine = document.querySelector('.button-image__line-second'),
    thirdMenuLine = document.querySelector('.button-image__line-third');

// close nav menu, if js is working:
headerNavigation.classList.remove('.site-navigation--opened');