import { products } from "./main.js";

const inputName = document.getElementById("id-name");
const inputPrice = document.getElementById("id-price");
const inputStock = document.getElementById("id-stock");
const inputBrand = document.getElementById("id-brand");
const inputCategory = document.getElementById("id-category");
const textAreaShortDesc = document.getElementById("id-short-desc");
const textAreaLongDesc = document.getElementById("id-long-desc");
const selectProductProcedence = document.getElementById("id-product-procedence");
const selectFreeShip = document.getElementById("id-free-ship");
const inputPhoto = document.getElementById("id-photo"); //CORREGIR

const buttonAddProduct = document.getElementById("id-add-product");

const alert = document.querySelector(".new_product__form__alert");
const alertText = document.querySelector(".new_product__form__alert__text");
const buttonAlertClose = document.querySelector(".new_product__form__alert__close");


const regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1].*[\s\.]*$/;
const regexStock = /^[0-9]{1,9}$/;
const regexShortDesc = /^([a-zA-ZÀ-ÿ\u00f1\u00d1].*[\s\.]*){5,300}$/;
const regexLongDesc = /^([a-zA-ZÀ-ÿ\u00f1\u00d1].*[\s\.]*){10,600}$/;

let nameValid = false;
let priceValid = false;
let stockValid = false;
let brandValid = false;
let categoryValid = false;
let shortDescValid = false;
let longDescValid = false;
let productProcedenceValid = true;
let freeShipValid = true;

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

function validatePrice() {
    if (inputPrice && inputPrice.value > 0) {
        inputPrice.nextElementSibling.innerText = "";
        priceValid = true;
    } else {
        inputPrice.nextElementSibling.innerText = "El precio ingresado es inválido";
        priceValid = false;
    }
    setStatusButton();
}

function validateStock() {
    if (!regexStock.test(inputStock.value)) {
        inputStock.nextElementSibling.innerText = "El stock ingresado es inválido";
        stockValid = false;
    } else {
        inputStock.nextElementSibling.innerText = "";
        stockValid = true;
    }
    setStatusButton();
}

function validateBrand() {
    if (!regexName.test(inputBrand.value)) {
        inputBrand.nextElementSibling.innerText = "La marca ingresada es inválida";
        brandValid = false;
    } else {
        inputBrand.nextElementSibling.innerText = "";
        brandValid = true;
    }
    setStatusButton();
}

function validateCategory() {
    if (!regexName.test(inputCategory.value)) {
        inputCategory.nextElementSibling.innerText = "La categoría ingresada es inválida";
        categoryValid = false;
    } else {
        inputCategory.nextElementSibling.innerText = "";
        categoryValid = true;
    }
    setStatusButton();
}

function validateShortDescription() {
    if (!regexShortDesc.test(textAreaShortDesc.value)) {
        textAreaShortDesc.nextElementSibling.innerText = "La descripción corta ingresada es inválida";
        shortDescValid = false;
    } else {
        textAreaShortDesc.nextElementSibling.innerText = "";
        shortDescValid = true;
    }
    setStatusButton();
}

function validateLongDescription() {
    if (!regexLongDesc.test(textAreaLongDesc.value)) {
        textAreaLongDesc.nextElementSibling.innerText = "La descripción larga ingresada es inválida";
        longDescValid = false;
    } else {
        textAreaLongDesc.nextElementSibling.innerText = "";
        longDescValid = true;
    }
    setStatusButton();
}

function validateProductProcedence() {
    if (!selectProductProcedence.value) {
        selectProductProcedence.nextElementSibling.innerText = "La procedencia del producto es inválida";
        productProcedenceValid = false;
    } else {
        selectProductProcedence.nextElementSibling.innerText = "";
        productProcedenceValid = true;
    }
    setStatusButton();
}

function validateFreeShip() {
    if (!selectFreeShip.value) {
        selectFreeShip.nextElementSibling.innerText = "Hay un problema con el tipo de envío ingresado";
        freeShipValid = false;
    } else {
        selectFreeShip.nextElementSibling.innerText = "";
        freeShipValid = true;
    }
    setStatusButton();
}


inputName.onblur = validateName;
inputPrice.onblur = validatePrice;
inputStock.onblur = validateStock;
inputBrand.onblur = validateBrand;
inputCategory.onblur = validateCategory;
textAreaShortDesc.onblur = validateShortDescription;
textAreaLongDesc.onblur = validateLongDescription;
selectProductProcedence.onblur = validateProductProcedence;
selectFreeShip.onblur = validateFreeShip;


function setStatusButton() {
    if (nameValid && priceValid && stockValid && brandValid && categoryValid && shortDescValid && longDescValid && productProcedenceValid && freeShipValid) {
        buttonAddProduct.disabled = false;
    }
    else {
        buttonAddProduct.disabled = true;
    }
}

function closeAlert() {
    alert.setAttribute("class", "new_product__form__alert");
}

function addProduct() {
    if (nameValid && priceValid && stockValid && brandValid && categoryValid && shortDescValid && longDescValid && productProcedenceValid && freeShipValid) {
        // console.log("Consulta:");
        // console.log("Nombre: " + inputName.value);
        // console.log("Email: " + inputEmail.value);
        // console.log("Texto consulta: " + textareaComment.value);
        let national;
        let imported;
        if (selectProductProcedence.value === "NACIONAL") {
            national = true;
            imported = false;
        } else {
            imported = true;
            national = false;
        }
        let freeShip;
        if (selectFreeShip.value === "SI") {
            freeShip = true;
        } else {
            freeShip = false;
        }

        const newProduct = {
            "nombre": inputName.value, "precio": Number(inputPrice.value), "stock": Number(inputStock.value), "marca": inputBrand.value, "categoría": inputCategory.value,
            "descripcion_corta": textAreaShortDesc.value,
            "descripción_larga": textAreaLongDesc.value, "producto_importado": imported, "producto_nacional": national, "envío_sin_cargo": freeShip, "fotografía": "./images/gallery/error.jpg"
        };
        console.log(newProduct);
        products.push(newProduct);
        console.log(products);
        alertText.innerText = "El producto se agregó correctamente!!";
        alert.setAttribute("class", "new_product__form__alert new_product__form__alert--success new_product__form__alert--show");

        setTimeout(() => {
            alert.setAttribute("class", "new_product__form__alert--hide");
        }, 5000);
    }
    else {
        alertText.innerText = "Hubo problemas agregar el producto. Intente nuevamente";
        alert.setAttribute("class", "new_product__form__alert new_product__form__alert--error new_product__form__alert--show");

        setTimeout(() => {
            alert.setAttribute("class", "new_product__form__alert--hide");
        }, 5000);
    }
}

buttonAddProduct.onclick = addProduct;

buttonAlertClose.onclick = closeAlert;