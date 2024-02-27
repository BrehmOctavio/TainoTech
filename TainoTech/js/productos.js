import {dataIphoneSellados, dataIpads, dataIphoneUsados, dataWatch, dataAirpods, dataMacbooks, dataProteccion, dataAudio, dataCargadores, dataFundas} from "./data/data.js";


//VARIABLES

let productosElejido = localStorage.getItem("productos-elejido");
const divItemProducts = document.querySelector(".div-items-products");
const titleDoc = document.querySelector(".title-web");
const products = document.querySelector(".products");
const titleProducts = document.querySelector(".title-products");
const seeMore  = document.querySelector(".see-more");

//TITLE-PAGE

titleDoc.textContent = `${productosElejido} - TainoTech`;

//TITLE-PRODUCTS

titleProducts.textContent = `${productosElejido}`;

//NAV

products.textContent = `/ ${productosElejido}`;

//RENDER-DATA

const renderIphoneSellados = () =>{
    for(let item of dataIphoneSellados){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card">
                <img class="image-product" src="${item.image}" alt="${item.title}"">
                <h2 class="title">${item.title}</h2>
                <p class="subtitle">${item.subtitle}</p>
                <h3 class="price">${item.price}</h3>
                <button class="btn-buy" id="${item.id}">Comprar</button>
            </div>
        `;                     
    }
};

const renderIpads = () =>{
    for(let item of dataIpads){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card">
                <img class="image-product" src="${item.image}" alt="${item.title}"">
                <h2 class="title">${item.title}</h2>
                <p class="subtitle">${item.subtitle}</p>
                <h3 class="price">${item.price}</h3>
                <button class="btn-buy" id="${item.id}">Comprar</button>
            </div>
        `;        
    }
};

const renderIphoneUsados = () =>{
    for(let item of dataIphoneUsados){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card">
                <img class="image-product" src="${item.image}" alt="${item.title}"">
                <h2 class="title">${item.title}</h2>
                <p class="subtitle">${item.subtitle}</p>
                <h3 class="price">${item.price}</h3>
                <button class="btn-buy" id="${item.id}">Comprar</button>
            </div>
        `;        
    }
};

const renderWatches = () =>{
    for(let item of dataWatch){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card">
                <img class="image-product" src="${item.image}" alt="${item.title}"">
                <h2 class="title">${item.title}</h2>
                <p class="subtitle">${item.subtitle}</p>
                <h3 class="price">${item.price}</h3>
                <button class="btn-buy" id="${item.id}">Comprar</button>
            </div>
        `;        
    }
};

const renderAirpods = () =>{
    for(let item of dataAirpods){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card">
                <img class="image-product" src="${item.image}" alt="${item.title}"">
                <h2 class="title">${item.title}</h2>
                <p class="subtitle">${item.subtitle}</p>
                <h3 class="price">${item.price}</h3>
                <button class="btn-buy" id="${item.id}">Comprar</button>
            </div>
        `;        
    }
};

const renderAccesorios = () =>{
    for(let item of dataAccesorios){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card">
                <img class="image-product" src="${item.image}" alt="${item.title}"">
                <h2 class="title">${item.title}</h2>
                <p class="subtitle">${item.subtitle}</p>
                <h3 class="price">${item.price}</h3>
                <button class="btn-buy" id="${item.id}">Comprar</button>
            </div>
        `;        
    }
};

const renderMacbooks = () =>{
    for(let item of dataMacbooks){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card" id="${item.id}">
                <img class="image-product" src="${item.image}" alt="${item.title}" id="${item.id}">
                <h2 class="title" id="${item.id}">${item.title}</h2>
                <p class="subtitle" id="${item.id}">${item.subtitle}</p>
                <h3 class="price" id="${item.id}">${item.price}</h3>
                <button class="btn-buy">Comprar</button>
            </div>
        `;        
    }
};

const renderProtección = () =>{
    for(let item of dataProteccion){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card" id="${item.id}">
                <img class="image-product" src="${item.image}" alt="${item.title}" id="${item.id}">
                <h2 class="title" id="${item.id}">${item.title}</h2>
                <p class="subtitle" id="${item.id}">${item.subtitle}</p>
                <h3 class="price" id="${item.id}">${item.price}</h3>
                <button class="btn-buy">Comprar</button>
            </div>
        `;        
    }
};

const renderAudio = () =>{
    for(let item of dataAudio){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card" id="${item.id}">
                <img class="image-product" src="${item.image}" alt="${item.title}" id="${item.id}">
                <h2 class="title" id="${item.id}">${item.title}</h2>
                <p class="subtitle" id="${item.id}">${item.subtitle}</p>
                <h3 class="price" id="${item.id}">${item.price}</h3>
                <button class="btn-buy">Comprar</button>
            </div>
        `;        
    }
};

const renderCargadores = () =>{
    for(let item of dataCargadores){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card" id="${item.id}">
                <img class="image-product" src="${item.image}" alt="${item.title}" id="${item.id}">
                <h2 class="title" id="${item.id}">${item.title}</h2>
                <p class="subtitle" id="${item.id}">${item.subtitle}</p>
                <h3 class="price" id="${item.id}">${item.price}</h3>
                <button class="btn-buy">Comprar</button>
            </div>
        `;        
    }
};

const renderFundas = () =>{
    for(let item of dataFundas){
        divItemProducts.innerHTML += `
            <div class="div-card-products" kind="card" id="${item.id}">
                <img class="image-product" src="${item.image}" alt="${item.title}" id="${item.id}">
                <h2 class="title" id="${item.id}">${item.title}</h2>
                <p class="subtitle" id="${item.id}">${item.subtitle}</p>
                <h3 class="price" id="${item.id}">${item.price}</h3>
                <button class="btn-buy">Comprar</button>
            </div>
        `;        
    }
};

switch(productosElejido){
    case "iPhone Sellados": renderIphoneSellados();
    break;
    case "iPads": renderIpads();
    break;
    case "iPhones Usados": renderIphoneUsados();
    break;
    case "Watches": renderWatches();
    break;
    case "Accesorios": renderAccesorios();
    break;
    case "Airpods": renderAirpods();
    break;
    case "Macbooks": renderMacbooks();
    break;
    case "Proteccion": renderProtección();
    break;
    case "Audio": renderAudio();
    break;
    case "Cargadores": renderCargadores();
    break;
    case "Fundas": renderFundas();
    break;
}

//ABRIR-PRODUCTO

window.document.addEventListener("click",(e)=>{
    if(e.target.className === "btn-buy"){
        localStorage.setItem("producto-elejido",e.target.id);
        window.open("../html/producto.html");
    }
});

//ABRIR-SECCIÓN-PRODUCTOS-SELECCIONADO-FOOTER

window.document.addEventListener("click",(e)=>{
    if(e.target.className === "li-footer"){
        localStorage.setItem("productos-elejido",e.target.id);
        window.open("../html/productos.html");
    };
});

//VER-MÁS-FUNDAS

seeMore.addEventListener("click",()=>{
    localStorage.setItem("productos-elejido","Fundas");
    window.open("../html/productos.html");
});