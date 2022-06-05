/*Local Storage*/

const form = document.getElementById("register-form")
const userList = document.getElementById('User-list')
const users = []


form.addEventListener("submit", (event) => {
    event.preventDefault()

    registerUser(event.target.elements['fullName'].value, event.target.elements['email'].value, event.target.elements['phone'].value, 
    event.target.elements['password'].value, event.target.elements['birthday'].value, event.target.elements['checkbox'].value )      

    event.target.elements['fullName'.value] = ""
    event.target.elements['email'].value = ""
    event.target.elements['phone'].value = ""
    event.target.elements['password'].value = ""
    event.target.elements['birthday'].value = ""
    event.target.elements['checkbox'].value = ""

    })

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