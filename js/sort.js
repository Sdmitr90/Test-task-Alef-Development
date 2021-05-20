(function() {
    'use strict';

var sortsAge = true;
var sortsPrice = true;
document.querySelector("#sort-price").onclick = function() {
    sort('[data-price]', 1, sortsPrice);
    if (sortsPrice) {
        document.querySelector("#sort-price").style.transform = "rotate(180deg)"
        document.querySelector("#sort-price").style.transition = "1s"
    } else {
        document.querySelector("#sort-price").style.transform = "rotate(0deg)"
    }
    sortsPrice = !sortsPrice

};

document.querySelector("#sort-age").onclick = function() {
    sort('[data-age]', 0, sortsAge);
    if (sortsAge) {
        document.querySelector("#sort-age").style.transform = "rotate(180deg)"
        document.querySelector("#sort-age").style.transition = "1s"
    } else {
        document.querySelector("#sort-age").style.transform = "rotate(0deg)"
    }
    sortsAge = !sortsAge
};

function sort(n, y, z) {
    var sort = document.querySelectorAll(n);
    for (let el of sort) {
        let x;
        if (y) {
            x = el.dataset.price;
        } else {
            x = el.dataset.age;
        }
        el.style.margin = "20px 0 0 0"
        if (!z) {
            el.style.order = -(+x);
        } else {
            el.style.order = (+x);
        }
    }
}
})();