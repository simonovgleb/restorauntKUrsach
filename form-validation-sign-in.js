const emailError = document.querySelector(".form__email__input__error")
const passwordError = document.querySelector(".form__password__input__error")
const emailInput = document.querySelector(".email__input")
const passwordInput = document.querySelector(".password__input")
const submitBtn = document.querySelector(".sign__in__button")
//const userInput = document.querySelector(".user__input")
const userError = document.querySelector(".form__user__input__error")
 
function validateEmail(email) {
    // Регулярное выражение для проверки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    // Регулярное выражение для проверки пароля
    const passwordRegex = /^(?=.*[a-zA-Z]{6,})(?=.*\d{4,}).{10,}$/;
    return passwordRegex.test(password);
}

let isCorrectEmail = false
let isCorrectPassword =false
 
submitBtn.addEventListener("click", ()=> {
    console.log(emailError)
    if(emailInput.value === "") {
        emailError.style.display = "block";
        emailError.textContent = "Please enter email"; 
       isCorrectEmail = false
    }
    else {
        emailError.style.display = "none";

        isCorrectEmail=true
    }
    if(passwordInput.value === "") {
        passwordError.style.display = "block";
        passwordError.textContent = "Please enter password"; 
    }
    else {
        passwordError.style.display = "none";
        isCorrectPassword =true
    }
    if(!validateEmail(emailInput.value) && emailInput.value.length>0) {
        emailError.style.display = "block";
        emailError.textContent = "Email is incorrect"; 
    }
    else {
        emailError.style.display = "none";
    }

    if(!validatePassword(passwordInput.value) &&  passwordInput.value.length>0) {
        passwordError.style.display = "block";
        passwordError.textContent = "Password must contain at least 6 charactars and 4 digits"; 
        isCorrectPassword =false
    }
    else {
        emailError.style.display = "none";
    }
 

})


 document.querySelector(".sign__in__button").addEventListener("click", (e)=> {
   
    e.preventDefault()
    if( isCorrectEmail && isCorrectPassword  ){
        document.body.style.overflowY = "hidden";
        modalWindow.style.display = "flex";
        console.log(11)
       }
    
    
    })
    
 document.querySelector(".modal__overlay").addEventListener("click", ()=> {

    document.body.style.overflowY = "scroll";
         modalWindow.style.display = "none";
     console.log(11)
 
 
 })


 document.querySelector(".modal__window__btn").addEventListener("click", ()=> {
    modalWindow.style.display = "none";
    console.log(11)
    document.body.style.overflowY = "scroll";
 })


 //sign_in_button