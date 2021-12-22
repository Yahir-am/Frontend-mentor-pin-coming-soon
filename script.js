const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateForm();
})

email.addEventListener('keyup',validateForm);

function validateForm(){
    var emailValue = email.value.trim();
    if(emailValue === ''){
        addError(email,'Email required');
    }else if(!validateEmail(emailValue)){
        addError(email,'Please provide a valid email address');
    }else{
        removeError(email);
    }
}


function addError(input,message){
    const formControl = input.parentElement;
    const small = document.querySelector('form small');
    formControl.className = 'error';
    small.innerText = message;
}

function removeError(input){
    const formControl = input.parentElement;
    formControl.className = 'success';
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}