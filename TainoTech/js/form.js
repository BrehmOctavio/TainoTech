//VARIABLES

const btnClose = document.querySelector(".btn-close-form");
const titleProductForm = document.querySelector(".title-product-form");
const imgProductChoose = document.querySelector(".img-product-choose");
const anchorDataSend = document.querySelector(".anchor-data-send");
const send = document.querySelector(".send");
let imageProduct = localStorage.getItem("image-product");
let productChoose = localStorage.getItem("producto-elejido");
let productStorage = localStorage.getItem("product-storage");
let productColor = localStorage.getItem("product-color");

//GET-INPUTS-CLIENT-DATA

let inputName = document.getElementById("input-name");
let inputLastname = document.getElementById("input-lastname");
let inputDni = document.getElementById("input-dni");
let inputProv = document.getElementById("input-prov");
let inputLoc = document.getElementById("input-loc");
let inputCodeP = document.getElementById("input-code");
let inputAddress = document.getElementById("input-address");
let inputPhoneNumber = document.getElementById("input-phone");
let inputEmail = document.getElementById("input-email");

//CLOSE-FORM

btnClose.addEventListener("click",()=>{
    window.close("../html/form.html");
});

//ADD-DATA-FORM

imgProductChoose.src = imageProduct; 

titleProductForm.textContent = `${productChoose} ${productStorage} `;

//SEND-ORDER

const sendDataWhatsapp = ()=>{
    anchorDataSend.href = `https://api.whatsapp.com/send?phone=1135722583&text=Producto: ${productChoose} ${productStorage} ${productColor} - 
    Nombre: ${inputName.value} - Apellido: ${inputLastname.value} -
    DNI: ${inputDni.value} - Provincia: ${inputProv.value} -
    Localidad: ${inputLoc.value} - Código Postal: ${inputCodeP.value} - 
    Domicilio: ${inputAddress.value} - Teléfono: ${inputPhoneNumber.value} - 
    Correo Electrónico: ${inputEmail.value}
    `;
};

send.addEventListener("click",()=>{
    sendDataWhatsapp();
});