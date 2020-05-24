var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;

function val_name() {
    if (username.value.length < 3 && username.value.length > 0) {
        name_error.innerHTML = "The Username is very short"
    } else if (username.value.length === 0) {
        name_error.innerHTML = "Text area is incomplet."
    } else {
        name_error.innerHTML = ""
    }
}

function val_surname() {
    if (surname.value.length < 3 && surname.value.length > 0) {
        surname_error.innerHTML = "The surname is very short."
    } else if (surname.value.length === 0) {
        surname_error.innerHTML = "Text area is incomplet."
    } else {
        surname_error.innerHTML = ""
    }
}

function val_email() {
    if (pattern.test(email.value)) {
        email_error.innerHTML = ""
    } else {
        email_error.innerHTML = "Email format is wrong"
    }
}

function val_age() {
    if (isNaN(age.value) || age.value < 1 || age.value > 99) {
        age_error.innerHTML = "Invalid age";
    } else {
        age_error.innerHTML = "";
    }
}
function send_frm() {
    val_name()
    val_surname()
    val_email()
    val_age()
    return false
}

function getElements() {
    username = document.getElementById('name')
    name_error = document.getElementById('name_error')
    surname = document.getElementById('surname')
    surname_error = document.getElementById('surname_error')
    email = document.getElementById('email')
    email_error = document.getElementById('email_error')
    age = document.getElementById("age");
    age_error = document.getElementById('age_error')
    send_btn = document.getElementById('send')
    send_btn.onclick = send_frm
}

var init = function () {
    getElements();
}

window.onload = init