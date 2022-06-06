const button = document.getElementById('btn-register')
const buttonBack = document.getElementById("btn-back")
const userList = document.getElementById('User-list')
const users = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var nameValue = document.getElementById('fullName').value;
    var emailValue = document.getElementById('email').value;
    var phoneValue = document.getElementById('phone').value;
    var passwordValue = document.getElementById('password').value;
    var birthdayValue = document.getElementById('birthday').value;
    var checkboxValue = document.getElementById('checkbox').checked;
    var resfName = validateName(nameValue);
    var resfEmail = validateEmail(emailValue);
    var resfPhone = validatePhone(phoneValue);
    var resfPassword = validatePassword(passwordValue);


    console.log(nameValue)
    console.log(birthdayValue)


    if (!resfName) {
        fullName.parentElement.classList.add('invalid')
    } else {
        fullName.parentElement.classList.remove('invalid')
    }

    if (!resfEmail) {
        email.parentElement.classList.add('invalid')
    } else {
        email.parentElement.classList.remove('invalid')
    }

    if (!resfPhone) {
        phone.parentElement.classList.add('invalid')
    } else {
        phone.parentElement.classList.remove('invalid')
    }

    if (!resfPassword) {
        password.parentElement.classList.add('invalid')
    } else {
        password.parentElement.classList.remove('invalid')
    }

    if (!checkboxValue) {
        labelCheckbox.parentElement.classList.add('invalid')
    } else {
        labelCheckbox.parentElement.classList.remove('invalid')
    }

    if (birthdayValue == "") {
        birthday.parentElement.classList.add('invalid')
    } else {
        birthday.parentElement.classList.remove('invalid')
        resfBirthday = true;


        if (resfName && resfEmail && resfPhone && resfPassword && resfBirthday && checkboxValue) {
            success()

            const name = event.target.elements['fullName']
            const email = event.target.elements['email']
            const phone = event.target.elements['phone']
            const password = event.target.elements['password']
            const birthday = event.target.elements['birthday']
            const checkbox = event.target.elements['checkbox']

            registerUser(name.value, email.value, phone.value, password.value, birthday.value, checkbox.value)
        }
    }
})

function validateName(value) {
    var nameCheck = /^[a-zA-Z ]{2,30}$/.test(value);
    return nameCheck;
}

function validateEmail(value) {
    var emailCheck = /^[\w.-]+@[\w-]+\.[\w.-]+$/.test(value);
    return emailCheck;
}

function validatePhone(value) {
    var phoneCheck = /^\(?([0-9]{2})\)?[-.]?([0-9]{5})[-. ]?([0-9]{4})$/.test(value);
    return phoneCheck;
}

function validatePassword(value) {
    var passwordCheck = /^(?=.*[0-9])(?!.*[ !@#%^&*_=+-]).{6,9}$/.test(value);
    return passwordCheck;
}

function validateCheckbox() {
    if (checkbox == true) {
        return checkboxValue;
    }
}
buttonBack.addEventListener('click', event => {
    redirection()
    location.reload();
})

function success() {
    login.parentElement.classList.add('success')
    register.parentElement.classList.add('redirection')
}

function redirection() {
    login.parentElement.classList.remove('success')
    register.parentElement.classList.remove('redirection')
    location.reload();
}

/*Local Storage*/


function registerUser(fullName, email, phone, password, birthday, checkbox) {

    const newUser = document.createElement('li')
    newUser.classList.add("user")

    const userID = document.createElement('number')

    newUser.appendChild(userID)
    newUser.appendChild += fullName

    userList.appendChild(newUser)


    const currentUser = {
        "fullName": fullName,
        "email": email,
        "phone": phone,
        "password": password,
        "birthday": birthday,
        "checkbox": checkbox,
    }
    if (JSON.parse(localStorage.getItem('user')) != null) {
        users.push(JSON.parse(localStorage.getItem('users')));
    }
    users.push(currentUser)
    localStorage.setItem("user", JSON.stringify(users))
}