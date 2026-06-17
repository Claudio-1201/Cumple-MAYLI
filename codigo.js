const contenedor = document.querySelector(".contenedor");

function irDerecha(){
    contenedor.style.transform = "translateX(-100vw)";
}

function irIzquierda(){
    contenedor.style.transform = "translateX(0)";
}

function mostrarMensaje(){

    document.getElementById("sorpresaFoto").style.display = "flex";

}

function cerrarFoto(){

    document.getElementById("sorpresaFoto").style.display = "none";
}