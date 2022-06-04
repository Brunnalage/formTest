  function validation() {
    
    var nameValue = document.getElementById('fullName').value;
    var emailValue = document.getElementById('email').value;
    var phoneValue = document.getElementById('phone').value;
    var passwordValue = document.getElementById('password').value;

    var nameCheck = /^[a-zA-Z ]{2,30}$/;
    var emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var phoneCheck = /^\(?([0-9]{2})\)?[-.]?([0-9]{5})[-. ]?([0-9]{4})$/
    var passwordCheck = /^(?=.*[0-9])(?!.*[ !@#%^&*_=+-]).{6,9}$/;

    if (nameCheck.test(nameValue)) {
        fullName.parentElement.classList.remove('invalid')
    } else {        
        fullName.parentElement.classList.add('invalid')
        return false;
    }

    if (emailCheck.test(emailValue)) {
        email.parentElement.classList.remove('invalid')
    } else {        
        email.parentElement.classList.add('invalid')
        return false;
    }

    if (phoneCheck.test(phoneValue)) {
        phone.parentElement.classList.remove('invalid')
    } else {        
        phone.parentElement.classList.add('invalid')
        return false;
    }

    if (passwordCheck.test(passwordValue)) {
        password.parentElement.classList.remove('invalid')
    } else {        
        password.parentElement.classList.add('invalid')
        return false;
    }
}


const button = document.getElementById('btn-register')

button.addEventListener('click', (event) =>{
    event.preventDefault()

    validation()
})



