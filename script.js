const generateBtn = document.getElementById("generate-btn")
const passwordList = document.getElementById("password-list")
const passwordEl = document.querySelectorAll("password")
const decrementBtn = document.getElementById("decrement-btn")
const incrementBtn = document.getElementById("increment-btn")

generateBtn.addEventListener("click", generatePassword) 




function generatePassword() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "1234567890"
    const mathSymbols = "</>*:-+!?="
    
    let characters = upperCase + lowerCase + numbers + mathSymbols
    characters = characters.split("")
    
    let password = "" 
    
    for (let i = 0 ; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    
    console.log(password)
    return password
}
/*
function generatePassword() {
    let passwords = []
    for (let i = 0; i < passwordEl.length; i++) {
        passwords.push(generatePassword())
    }
    
    for (let i = 0; i < passwords.length; i++) {
        passwordEl[i].value = passwords[i]
        passwordEl[i].style.display = "block"

    }
}
    */