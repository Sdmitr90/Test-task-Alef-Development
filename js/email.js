(function() {
    'use strict';
  

document.querySelector("#inputButton").onclick = function(){
    let email = document.querySelector("#inputEmail");
    let regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexpEmail.test(email.value)) {
        email.style.background = "none";
    } else {
        email.style.background = "#f16d7f";
        alert("Введите корректные данные!")
    }
    if (regexpEmail.test(email.value)) {
        alert("Ваши данные успешно отправлены!")
    }
}
})();

// не использовал submit в input, для того чтобы страница не перезагружалась при тестах