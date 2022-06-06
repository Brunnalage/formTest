const button = document.getElementById('btn-register')
const buttonBack = document.getElementById("btn-back")
const form = document.getElementById("Register-form")
const userList = document.getElementById('User-list')
const users = []
var errors = false;  
  
   form.addEventListener('submit', (event) => {
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
    errors = false    
    }

    if (checkboxValue == false){
       labelCheckbox.parentElement.classList.add('invalid')           
    } else {
        labelCheckbox.parentElement.classList.remove('invalid') 
        errors = false
    }        
      })    


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

/*Local Storage*/


form.addEventListener("submit", (e) => {
    e.preventDefault()
    registerUser(event.target.elements['fullName'].value, event.target.elements['email'].value, event.target.elements['phone'].value, 
    e.target.elements['password'].value, event.target.elements['birthday'].value, event.target.elements['checkbox'].value )      

    e.target.elements['fullName'.value] = ""
    e.target.elements['email'].value = ""
    e.target.elements['phone'].value = ""
    e.target.elements['password'].value = ""
    e.target.elements['birthday'].value = ""
    e.target.elements['checkbox'].value = ""
}
    )

function registerUser (fullName, email, phone, password, birthday, checkbox){

    const newUser = document.createElement('li')
    newUser.classList.add("user")

    const userID = document.createElement('number')
   
    newUser.appendChild(userID)      

    userList.appendChild(newUser)

    const currentUser = {
        "fullName": fullName,
        "email": email,
        "phone": phone,
        "password": password,
        "birthday": birthday,
        "checkbox": checkbox,
    }
    
    users.push(currentUser)
    localStorage.setItem("user", JSON.stringify(users))  
}