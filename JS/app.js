var email_test = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;// validation for email
var letters_test = /^[a-zA-Z]*$/; // validation for letters
var numbers_test = /^([1-9]?\d|100)$/; //validation for numbers

function val_name() {//check the name if the name has invalid characters or is short
    if (!letters_test.test(username.value)) {
        name_error.innerHTML = "Complete whit only letters."
        console.log('Name: Complete whit only letters.')
        check_name = false
    } else if (username.value.length < 3 && username.value.length > 0) {
        name_error.innerHTML = "The Username is very short."
        console.log('Name: The Username is very short.')
        check_name = false
    } else if (username.value.length === 0) {
        name_error.innerHTML = "Text area is incomplet."
        console.log('Name: Text area is incomplet.')
        check_name = false
    } else {
        name_error.innerHTML = ""
        check_name = true
    }
}

function val_surname() {//check the surname if the name has invalid characters or is short
    if (!letters_test.test(surname.value)) {
        surname_error.innerHTML = "Complete whit only letters."
        console.log('Surname: Complete whit only letters.')
        check_surname = false
    } else if (surname.value.length < 3 && surname.value.length > 0) {
        surname_error.innerHTML = "The surname is very short."
        console.log('Surname: The surname is very short.')
        check_surname = false
    } else if (surname.value.length === 0) {
        surname_error.innerHTML = "Text area is incomplet."
        console.log('Surname: Text area is incomplet.')
        check_surname = false
    } else {
        surname_error.innerHTML = ""
        check_surname = true
    }
}

function val_email() {//check correct format for email
    if (!email_test.test(email.value)) {
        email_error.innerHTML = "Email format is wrong"
        console.log('Email: Email format is wrong.')
        check_email = false
    } else {
        email_error.innerHTML = ""
        check_email = true
    }
}

function val_age() {//check the age for numbres between 0 to 100 or is inval 
    if (age.value < 1 || age.value > 99) {
        age_error.innerHTML = "Invalid age";
        console.log('Age: Invalid age.')
        check_age = false
    } else if (!numbers_test.test(age.value)) {
        age_error.innerHTML = "Only numbers."
        console.log('Age: Only numbers.')
        check_age = false
    } else {
        age_error.innerHTML = "";
        check_age = true
    }
}

function val_choose() {//first check if they are all right, later check one by one
    if (male.checked === false && female.checked === false && other.checked === false && music.checked === false && sport.checked === false && games.checked === false && technology.checked === false) {
        country_padding.style.padding = "0 10px 0 10px"
        country_span.style.marginTop = "3px"
        choose_error.innerHTML = 'Choose a sex and a interest theme.'
        console.log('Choose a sex and a interest theme.')
        check_sex = false
        check_interest = false
    } else if (male.checked === false && female.checked === false && other.checked === false) {
        country_padding.style.padding = "0 10px 0 10px"
        country_span.style.marginTop = "3px"
        choose_error.innerHTML = 'Choose a sex, please.'
        console.log('Sex: Choose a sex')
        check_sex = false
    } else if (music.checked === false && sport.checked === false && games.checked === false && technology.checked === false) {
        country_padding.style.padding = "0 10px 0 10px"
        country_span.style.marginTop = "3px"
        choose_error.innerHTML = 'Choose a interest theme, please.'
        console.log('Interest theme: Choose a interest theme')
        check_interest = false
    } else {
        choose_error.innerHTML = ''
        country_padding.style.padding = "10px 10px 0 10px"
        country_span.style.marginTop = "10px"
        check_interest = true
        check_sex = true
    }
}

function val_country() {//check if country is null
    if (select.selected === true) {
        choose_country_error.innerHTML = 'Select a country'
        console.log('Countery: Select a country')
        check_country = false
    } else {
        choose_country_error.innerHTML = ''
        check_country = true
    }
}

function val_comments() {//validation text area comments
    if (comments.value.length < 1) {
        comments_error.innerHTML = 'Write a comment, please.'
        console.log('Comment: Write a coment, please.')
        check_comments = false
    } else {
        comments_error.innerHTML = ''
        check_comments = true
    }
}

function form_data() {//write in console all data of the form
    console.log('Name: ' + username.value)
    console.log('Surname: ' + surname.value)
    console.log('Email :' + email.value)
    console.log('Age : ' + age.value)
    if (male.checked === true) {
        console.log('Sex: Male')
    } else if (female.checked === true) {
        console.log('Sex: Female')
    } else if (other.checked === true) {
        console.log('Sex: Other')
    }
    console.log('Interest themes:')
    if (music.checked === true) {
        console.log('Music')
    }
    if (sport.checked === true) {
        console.log('Sport')
    }
    if (games.checked === true) {
        console.log('Games')
    }
    if (technology.checked === true) {
        console.log('Technology')
    }
    if (select.selected === true) {
        console.log('Country :')
    }
    if (argentina.selected === true) {
        console.log('Country : Argentina')
    }
    if (chile.selected === true) {
        console.log('Country : Chile')
    }
    if (brasil.selected === true) {
        console.log('Country : Brasil')
    }
    if (uruguay.selected === true) {
        console.log('Country : Uruguay')
    }
    console.log('Comments: ' + comments.value)
}

function clear_frm() {//check if the form is all right
    if (check_name === true && check_surname === true && check_age === true && check_email === true && check_sex === true && check_interest === true && check_country === true && check_comments === true) {
        form_data()
        window.alert("Contragrats you sing in");
        username.value = ''
        surname.value = ''
        email.value = ''
        age.value = ''
        male.checked = false
        female.checked = false
        other.checked = false
        music.checked = false
        sport.checked = false
        games.checked = false
        technology.selected = false
        comments.value = ''
    } else {
        console.log('Please complete all the form for show results')
    }
}

function send_frm() {//btn validations
    console.clear()
    val_name()
    val_surname()
    val_email()
    val_age()
    val_choose()
    val_country()
    val_comments()
    clear_frm()
    return false
}

function getElements() {
    //Inputs text
    username = document.getElementById('name')
    name_error = document.getElementById('name_error')
    surname = document.getElementById('surname')
    surname_error = document.getElementById('surname_error')
    email = document.getElementById('email')
    email_error = document.getElementById('email_error')
    age = document.getElementById("age");
    age_error = document.getElementById('age_error')
    //Choose area
    //Sex
    male = document.getElementById('male')
    female = document.getElementById('female')
    other = document.getElementById('other')
    //Interest
    music = document.getElementById('music')
    sport = document.getElementById('sport')
    games = document.getElementById('games')
    technology = document.getElementById('technology')
    choose_error = document.getElementById('choose_error')
    //Country
    country = document.getElementById('country').value
    select = document.getElementById('select')
    argentina = document.getElementById('argentina')
    brasil = document.getElementById('brasil')
    chile = document.getElementById('chile')
    uruguay = document.getElementById('uruguay')
    choose_country_error = document.getElementById('choose_country_error')
    //Comments
    comments = document.getElementById('comments')
    comments_error = document.getElementById('comments_error')
    //Btn
    send_btn = document.getElementById('send')
    send_btn.onclick = send_frm

    country_padding = document.getElementById("choose_country")
    country_span = document.getElementById("span_country")
}

var init = function () {
    getElements();
}

window.onload = init
