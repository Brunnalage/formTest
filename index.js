const button = document.getElementById('btn-register')
const buttonBack = document.getElementById("btn-back")

button.addEventListener('click', event => {
    event.preventDefault();
    
    var nameValue = document.getElementById('fullName').value;
    var emailValue = document.getElementById('email').value;
    var phoneValue = document.getElementById('phone').value;
    var passwordValue = document.getElementById('password').value;
    var dateValue = document.getElementById('birthday').value;
    var checkboxValue = document.getElementById('checkbox').checked;
    

    var nameCheck = /^[a-zA-Z ]{2,30}$/;
    var emailCheck = /^[\w.-]+@[\w-]+\.[\w.-]+$/;
    var phoneCheck = /^\(?([0-9]{2})\)?[-.]?([0-9]{5})[-. ]?([0-9]{4})$/
    var passwordCheck = /^(?=.*[0-9])(?!.*[ !@#%^&*_=+-]).{6,9}$/;
    

    if (nameCheck.test(nameValue)) {
        fullName.parentElement.classList.remove('invalid')
    } else {        
        fullName.parentElement.classList.add('invalid')        
    }

    if (emailCheck.test(emailValue)) {
        email.parentElement.classList.remove('invalid')
    } else {        
        email.parentElement.classList.add('invalid')        
    }

    if (phoneCheck.test(phoneValue)) {
        phone.parentElement.classList.remove('invalid')
    } else {        
        phone.parentElement.classList.add('invalid')       
    }

    if (passwordCheck.test(passwordValue)) {
        password.parentElement.classList.remove('invalid')
    } else {        
        password.parentElement.classList.add('invalid')        
    }

    if(dateValue == "") {
    birthday.parentElement.classList.add('invalid')   
    } else {
    birthday.parentElement.classList.remove('invalid')    
    }

    if (checkboxValue == false){
       labelCheckbox.parentElement.classList.add('invalid')    
       return false;
    } else {
        labelCheckbox.parentElement.classList.remove('invalid') 
    }  
    
    success();
}    
)

buttonBack.addEventListener('click', event => {
    redirection()
    location.reload();
})

function success(){
    login.parentElement.classList.add('success')
    register.parentElement.classList.add('redirection')
}

function redirection(){
login.parentElement.classList.remove('success')
register.parentElement.classList.remove('redirection')
location.reload();
}