import {dataIphoneSellados, dataIpads, dataIphoneUsados, dataWatch, dataAirpods, dataMacbooks, dataProteccion, dataAudio, dataCargadores, dataFundas} from "./data/data.js";

//VARIABLES

let productosElejido = localStorage.getItem("productos-elejido");
let productoElejido = localStorage.getItem("producto-elejido");
const products = document.querySelector(".products");
const product = document.querySelector(".product");
const titleDoc = document.querySelector(".title-web");
const title = document.querySelector(".title");
const titleColor = document.querySelector(".title-color");
const titleStorage = document.querySelector(".title-storage");
const imgProduct = document.querySelector(".img-product");
const priceProduct = document.querySelector(".price");
const divStorages = document.querySelector(".div-storage-items");
const divColors = document.querySelector(".div-color-items");
const divImages = document.querySelector(".div-images");
const btnReserve = document.querySelector(".btn-reserve");
const divForm = document.querySelector(".div-form");
const imgProductChoose = document.querySelector(".img-product-choose");
const titleProductForm = document.querySelector(".title-product-form");
const closeForm = document.querySelector(".close-form");

//TITLE-PAGE

titleDoc.textContent = `${productoElejido} - TainoTech`;

//NAV

products.textContent = `/ ${productosElejido}`;
product.textContent = `/ ${productoElejido}`;

//RENDER-DATA

let allData = [dataIphoneSellados, dataIpads, dataIphoneUsados, dataWatch, dataAirpods, dataMacbooks, dataProteccion, dataAudio, dataCargadores, dataFundas]

const renderData = (item2)=>{
    title.textContent = item2.title;
    imgProduct.src = item2.image;
    priceProduct.textContent = item2.price;
    divImages.innerHTML = `
        <img class="img-product" src="${item2.images.image_2}" alt="image-product">
        <img class="img-product" src="${item2.images.image_3}" alt="image-product">
        <img class="img-product" src="${item2.images.image_4}" alt="image-product">
        <img class="img-product" src="${item2.images.image_5}" alt="image-product">
    `; 
    divColors.innerHTML = `
        <button class="color" style="background-color: ${item2.colors.color_1};" id="${item2.colors.color_1}"></button>
        <button class="color" style="background-color: ${item2.colors.color_2};" id="${item2.colors.color_2}"></button>
        <button class="color" style="background-color: ${item2.colors.color_3};" id="${item2.colors.color_3}"></button>
    `; 
    divStorages.innerHTML = `
        <button class="storage" id="${item2.storages.storage_1}">${item2.storages.storage_1}</button>
        <button class="storage" id="${item2.storages.storage_2}">${item2.storages.storage_2}</button>
        <button class="storage" id="${item2.storages.storage_3}">${item2.storages.storage_3}</button>
    `; 
};

for(let item of allData){
    for(let item2 of item){
        if(item2.id === productoElejido){
            renderData(item2);
            localStorage.setItem("image-product",item2.image);
        };
    };
};


//CHANGE-IMAGE

divImages.addEventListener("click",(e)=>{
    imgProduct.src = `${e.target.src}`;
});

//CHANGE-BTNS-COLOR-STORAGE

divStorages.addEventListener("click",(e)=>{
    for(let item of divStorages.children){
        item.classList.remove("select");
    };
    e.target.className === "storage" ? e.target.classList.add("select"): null;
    titleStorage.textContent = `Almacenamiento: ${e.target.textContent}`;
    localStorage.setItem("product-storage",e.target.textContent);
});

const colorText = (e)=>{
    switch(e.target.style.backgroundColor){
        case "rgb(25, 181, 248)": titleColor.textContent = "Color: Celeste";
        break;
        case "rgb(63, 150, 80)": titleColor.textContent = "Color: Verde";
        break;
        case "rgb(40, 19, 82)": titleColor.textContent = "Color: Violeta";
        break;
    };
};

divColors.addEventListener("click",(e)=>{
    colorText(e);
});

//PASS-DATA-FORM

/*btnReserve.addEventListener("click",()=>{
    divForm.classList.add("open");
});

closeForm.addEventListener("click",()=>{
    divForm.classList.remove("open");
});

imgProductChoose.src = imgProduct.src;

//Local Storage data

let storageProductChoose = localStorage.getItem("product-storage");

titleProductForm.textContent = `${title.textContent} ${storageProductChoose} ${titleColor.textContent}`;
*/
