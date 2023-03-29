const btnNext = document.querySelector(".register-form__btn-next");
const btnCancel = document.querySelector(".register-form__btn-cancel");
const btnSend = document.querySelector(".register-form__btn-enviar")

btnNext.addEventListener('click', () => {
    document.querySelector('.register-form__form1').setAttribute('id', 'none');
    document.querySelector('.register-form__form2').setAttribute('id', '');
    btnNext.setAttribute('id', 'none');
    btnSend.setAttribute('id', '');
});

btnCancel.addEventListener('click', () => {
    document.querySelector('.register-form__form1').setAttribute('id', '');
    document.querySelector('.register-form__form2').setAttribute('id', 'none');
    btnNext.setAttribute('id', '');
    btnSend.setAttribute('id', 'none');
});


