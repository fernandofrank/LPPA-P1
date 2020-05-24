var getElements = function () {
    name = document.getElementById('name')
    name_error = document.getElementById('nombre_error')
    surname = document.getElementById('surname')
    surname_error = document.getElementById('surname_error')
    email = document.getElementById('email')
    email_error = document.getElementById('email_error')
    age = document.getElementById("age");
    age_error = document.getElementById('age_error')
    send = document.getElementById('send')
    send_form.onclick = send_form
}

var init = function () {
    getElements();
}

window.onload = init