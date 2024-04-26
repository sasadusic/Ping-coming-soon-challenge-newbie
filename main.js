const form = document.querySelector(".form")
const input = document.querySelector(".input")
const error = document.querySelector(".error")

form.onsubmit = () => {
    const email = input.value
    if(isEmail(email)){
        if(form.classList.contain('form-error')){
            form.classList.remove('form-error')
            input.value = ''
            error.innerText = ''
        }else{
            input.value = ''
            error.innerText = ''
        }
        
    }else{
        form.classList.add('form-error')
        error.innerText = 'Please provide a valid email address'
    }
    return false
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}