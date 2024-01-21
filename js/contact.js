const inputName = document.getElementById("id-full-name");
const inputEmail = document.getElementById("id-email");
const textareaComment = document.getElementById("id-comment");
const buttonSave = document.getElementById("id-save");
const alert = document.querySelector(".contact__form__alert");
const alertText = document.querySelector(".contact__form__alert__text");
const buttonAlertClose = document.querySelector(".contact__form__alert__close");

const regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1].*[\s\.]*$/;
const regexEmail = /^[a-z0-9._]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;
const regexComment = /^([a-zA-ZÀ-ÿ\u00f1\u00d1].*[\s\.]*){5,250}$/;

let nameValid = false;
let emailValid = false;
let textareaValid = false;

function validateName() {
    if (!regexName.test(inputName.value)) {
        inputName.nextElementSibling.innerText = "El nombre ingresado es inválido";
        nameValid = false;
    } else {
        inputName.nextElementSibling.innerText = "";
        nameValid = true;
    }
    setStatusButton();
}

function validateEmail() {
    if (!regexEmail.test(inputEmail.value)) {
        inputEmail.nextElementSibling.innerText = "El email ingresado es inválido";
        emailValid = false;
    } else {
        inputEmail.nextElementSibling.innerText = "";
        emailValid = true;
    }
    setStatusButton();
}

function validateComment() {
    if (!regexComment.test(textareaComment.value)) {
        textareaComment.nextElementSibling.innerText = "El comentario ingresado no cumple el límite de caracteres (min: 5 - max: 250)";
        textareaValid = false;
    } else {
        textareaComment.nextElementSibling.innerText = "";
        textareaValid = true;
    }
    setStatusButton();
}

inputName.onblur = validateName;
inputEmail.onblur = validateEmail;
textareaComment.onblur = validateComment;

function setStatusButton() {
    if (nameValid && emailValid && textareaValid) {
        buttonSave.disabled = false;
    }
    else {
        buttonSave.disabled = true;
    }
}


function closeAlert() {
    alert.setAttribute("class", "contact__form__alert");
}

function sendComment() {
    if (nameValid && emailValid && textareaValid) {
        console.log("Consulta:");
        console.log("Nombre: " + inputName.value);
        console.log("Email: " + inputEmail.value);
        console.log("Texto consulta: " + textareaComment.value);
        alertText.innerText = "El formulario se envió correctamente!!";
        alert.setAttribute("class", "contact__form__alert contact__form__alert--success contact__form__alert--show");

        setTimeout(() => {
            alert.setAttribute("class", "contact__form__alert--hide");
        }, 5000);
    }
    else {
        alertText.innerText = "Hubo problemas con al enviar el formulario. Intente nuevamente";
        alert.setAttribute("class", "contact__form__alert contact__form__alert--error contact__form__alert--show");

        setTimeout(() => {
            alert.setAttribute("class", "contact__form__alert--hide");
        }, 5000);
    }
}

buttonSave.onclick = sendComment;

buttonAlertClose.onclick = closeAlert;