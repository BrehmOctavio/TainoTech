import {dataMasBuscados, dataProductosRecomendados, dataMasVendidos} from "./data/data.js";

//VARIABLES

const divItemsMoreSearch = document.querySelector(".div-items-more-search");
const divItemsRecommendedProducts = document.querySelector(".div-items-recommended-products");
const divItemsMoreSell = document.querySelector(".div-items-more-sell");
const seeMoreIntroInfo = document.querySelector(".btn-see-more");

//VER-MAS-INTRO-INFO

seeMoreIntroInfo.addEventListener("click",()=>{
    localStorage.setItem("productos-elejido","iPhone Sellados");
    window.open("../html/productos.html");
});

//RENDER-MAS-BUSCADOS

for(let item of dataMasBuscados){
    divItemsMoreSearch.innerHTML += `
        <div class="card">
            <img class="img-card" src="${item.imagenProducto}" alt="${item.tituloProducto}">
            <h2 class="title">${item.tituloProducto}</h2>
            <button class="btn-buy" id="${item.id}">COMPRAR</button>
        </div>
    `;
}

//RENDER-PRODUCTOS-RECOMENDADOS

for(let item of dataProductosRecomendados){
    divItemsRecommendedProducts.innerHTML += `
        <div class="card">
            <img class="img-card" src="${item.imagenProducto}" alt="${item.tituloProducto}">
            <h2 class="title">${item.tituloProducto}</h2>
            <button class="btn-buy" id="${item.id}">COMPRAR</button>
        </div>
    `;
}

//RENDER-MÁS-VENDIDOS

for(let item of dataMasVendidos){
    divItemsMoreSell.innerHTML += `
        <div class="card">
            <img class="img-card" src="${item.imagenProducto}" alt="${item.tituloProducto}">
            <h2 class="title">${item.tituloProducto}</h2>
            <button class="btn-buy" id="${item.id}">COMPRAR</button>
        </div>
    `;
}

//ABRIR-SECCIÓN-PRODUCTOS-SELECCIONADO

window.document.addEventListener("click",(e)=>{
    if(e.target.className === "div-card" || e.target.className === "title-card" || e.target.className === "img-card"){
        localStorage.setItem("productos-elejido",e.target.id);
        window.open("../html/productos.html");
    };
});

//MÁS-BUSCADOS/VENDIDOS/RECOMENDADOS

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

//ABRIR-SECCIÓN-PROTECCIÓN-AUDIO-CARGADORES

window.document.addEventListener("click",(e)=>{
    if(e.target.className === "div-item-1" || e.target.className === "div-item-2" || e.target.className === "div-item-3"){
        localStorage.setItem("productos-elejido",e.target.id);
        window.open("../html/productos.html");
    };
});



