const $button = document.querySelector('.form__button');
const $form = document.getElementById('form');
const $input = document.querySelector('.form__input');
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;


const formIsValid = {
    $input:false
}


$input.addEventListener('change', (e)=>{

    const inputValue = e.target.value;
    const emailValidation = emailReg.test(inputValue);

    if(emailValidation == false){
    $input.classList.add('form__input--invalid');
    $input.nextElementSibling.textContent = 'Please provide a valid email';
    formIsValid.$input = false;
    }

    else{
    $input.classList.remove('form__input--invalid');
    $input.nextElementSibling.textContent = null;
    formIsValid.$input = true;
    }

});

$button.addEventListener('click', (e)=>{

    e.preventDefault();

    if(formIsValid.$input == true){
        $form.submit();
    }

});