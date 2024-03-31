const botoncom = document.getElementById("botoncom");
const comentarios = document.getElementById("comentarios");
const botonenvio = document.getElementById("subir");
const resenia_usr = document.getElementById("input_resena");
const nombre_usr = document.getElementById("name_input");
const email_usr = document.getElementById("exampleInputEmail1");

let usr = 0;

function crearComentario(nombre,resenia){
    var comentario = document.createElement("div");
    comentario.classList.add("comentario");
    var cabecera = document.createElement("header");
    cabecera.classList.add("cabecera_usr");

    var img = document.createElement("img");
    img.src = "./imgs/usr"+usr.toString()+".jpg";
    console.log("IMAGEN:" +img.src);
    usr = (usr+1)%4;
    img.alt = "Imagen de Usuario";

    var nom = document.createElement("h2");
    nom.classList.add("nombre_usr");
    nom.textContent = nombre;

    const f = new Date();
    var hora = f.getHours();
    var min = f.getMinutes();
    var dia = f.getDate().toString();
    var mes = f.getMonth()+1;
    mes = mes.toString();
    var anio = f.getFullYear().toString();

    var fecha = document.createElement("h3");
    fecha.classList.add("fecha_usr");
    fecha.textContent = "a las "+hora+":"+min+ "  del  "+dia+"/"+mes+"/"+anio;

    cabecera.appendChild(img);
    cabecera.appendChild(nom);
    cabecera.appendChild(fecha);

    var resena = document.createElement("p");
    resena.classList.add("resena");
    resena.textContent = resenia;

    comentario.appendChild(cabecera);
    comentario.appendChild(resena);

    return comentario;
}

function esValido(nombre,email,resena){
    var valido = true;
    var errorEmail = document.getElementById("emailError");
    var errorNombre = document.getElementById("errorName");
    if(nombre ==''){
        valido = false;
        errorNombre.classList.remove("oculto");
        errorNombre.classList.add("visible");
    } else{
        errorNombre.classList.add("oculto");
        errorNombre.classList.remove("visible");
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailPattern.test(email) == false){
        valido = false;
        errorEmail.classList.remove("oculto");
        errorEmail.classList.add("visible");
    }else{
        errorEmail.classList.add("oculto");
        errorEmail.classList.remove("visible");
    }
    return valido;
}

botonenvio.addEventListener('click',() => {
    if(esValido(nombre_usr.value,email_usr,resenia_usr.value)){
        let comentario = crearComentario(nombre_usr.value,resenia_usr.value);
        comentarios.appendChild(comentario);
    }
});

botoncom.addEventListener('click', () => {
    let com = document.querySelector('#comentarios');
    if(com.classList.contains("oculto")){
        com.classList.remove("oculto");
        com.classList.add("visible");
    } else{
        com.classList.remove("visible");
        com.classList.add("oculto");
    }
});

const prohibidas = ["puta","tonto","gilipollas","petardo","swad","etc"];

resenia_usr.addEventListener('keyup', () =>{
    let valor = resenia_usr.value;
    for(var i = 0; i < prohibidas.length;i++)
    valor = valor.replace(/\b{prohibid}\b/gi, "p***");
    resenia_usr.value = valor;
});