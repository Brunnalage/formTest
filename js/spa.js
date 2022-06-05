button.addEventListener('click', (event) =>{
    login.parentElement.classList.add('success')
    register.parentElement.classList.add('redirection')                
})

const buttonBack = document.getElementById("btn-back")

const button = document.getElementById('btn-register')

buttonBack.addEventListener('click', (event) => {
login.parentElement.classList.remove('success')
register.parentElement.classList.remove('redirection')
location.reload();
})