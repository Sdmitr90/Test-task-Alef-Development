(function() {
    'use strict';
  
let tooltipElem;
let target = document.querySelectorAll(".products-product-img-like");
for (let el of target) {
    el.onclick = function() {
        el.lastChild.children[0].classList.add('products-product-img-like__color100');
        let tooltipHtml = el.dataset.tooltip;
        if (!tooltipHtml) return;


        tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = tooltipHtml;
        document.body.append(tooltipElem);

        let coords = el.getBoundingClientRect();

        let left = coords.left + (el.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0;

        let top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) {
            top = coords.top + el.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';
        setTimeout(() => {
            tooltipElem.remove();
            tooltipElem = null;
        }, 500);
    };
}
})();

