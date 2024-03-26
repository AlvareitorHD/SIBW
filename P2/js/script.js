const boton = document.getElementById("botoncom");

boton.addEventListener('click', () => {
    let com = document.querySelector('#comentarios');
    console.log(com);
    if(com.classList.contains("oculto")){
        com.classList.add("visible");
        com.classList.remove("oculto");
    } else{
        com.classList.remove("visible");
        com.classList.add("oculto");
    }
});