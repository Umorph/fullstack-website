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

var headerMenuButton = document.querySelector(".header__menu-button");
var firstMenuLine = document.querySelector(".button-image__line-first");
var secondMenuLine = document.querySelector(".button-image__line-second");
var thirdMenuLine = document.querySelector(".button-image__line-third");

headerMenuButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    // alert('ПРОИЗОШОЛ ТРОЛЛЕНГ')
    if (headerMenuButton.classList.contains("header__menu-button--opened")) {
        headerMenuButton.classList.remove("header__menu-button--opened");
        firstMenuLine.classList.remove("button-image__line-first--opened");
        secondMenuLine.classList.remove("button-image__line-second--opened");
        thirdMenuLine.classList.remove("button-image__line-third--opened");
    } else {
        headerMenuButton.classList.add("header__menu-button--opened");
        firstMenuLine.classList.add("button-image__line-first--opened");
        secondMenuLine.classList.add("button-image__line-second--opened");
        thirdMenuLine.classList.add("button-image__line-third--opened");
    }
});