const generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", generatePassword) 
  
console.log(generatePasswords())


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
