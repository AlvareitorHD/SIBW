const botoncom = document.getElementById("botoncom");
const comentarios = document.getElementById("comentarios");
const botonenvio = document.getElementById("subir");
const resenia_usr = document.getElementById("input_resena");
const nombre_usr = document.getElementById("name_input");
const email_usr = document.getElementById("exampleInputEmail1");

/* Variable que controla la rotación de foto de perfil por defecto (0-3) */
let usr = 0;

/* Funcion para crear comentario dandole el nombre y reseña, la fecha y hora es automática */
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

/* Función que comprueba si el comentario es válido tanto por nombre, email y reseña */
function esValido(nombre,email,resena){
    var valido = true;
    var errorEmail = document.getElementById("emailError");
    var errorNombre = document.getElementById("errorName");
    var errorResena = document.getElementById("resenaError");

    if(nombre ==''){
        valido = false;
        errorNombre.classList.remove("oculto");
        errorNombre.classList.add("visible");
    } else{
        errorNombre.classList.add("oculto");
        errorNombre.classList.remove("visible");
    }
    /* Patron email:
        ^ inicio
        [...]+ comprueba que haya de a-z o A-Z o 0-9 o . _ - (pero al menos un caracter)
        @ obligatorio
        [...]+ igual que lo anterior
        \. obligatorio un punto
        [...]{2,} el tld (top-level domain o dominio nivel superior) debe ser letras y como mínimo 2 caracteres
        $ fin
    */
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailPattern.test(email) == false){
        valido = false;
        errorEmail.classList.remove("oculto");
        errorEmail.classList.add("visible");
    }else{
        errorEmail.classList.add("oculto");
        errorEmail.classList.remove("visible");
    }
    if(resena == ''){
        valido = false;
        errorResena.classList.remove("oculto");
        errorResena.classList.add("visible");
    }else{
        errorResena.classList.add("oculto");
        errorResena.classList.remove("visible");
    }
    return valido;
}

/* Evento botón Subir Comentario: subirá el comentario a la sección si es válido */
botonenvio.addEventListener('click',() => {
    if(esValido(nombre_usr.value,email_usr.value,resenia_usr.value)){
        let comentario = crearComentario(nombre_usr.value,resenia_usr.value);
        comentarios.appendChild(comentario);
    }
});

/* Evento botón Comentarios para mostrar/ocultar la sección de comentarios */
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

/* Palabras prohibidas */
const prohibidas = ["puta","tonto","gilipollas","petardo","prado","ugr","mierda","lol","feo"];

resenia_usr.addEventListener('keyup', () =>{
    let valor = resenia_usr.value;
    for (var i = 0; i < prohibidas.length; i++) {
        /* Creamos una variable regex que busque la palabra prohibida (gi: g de global en todo el texto e i para mayusculas
            y minusculas, \\b indica límite de palabra */
        var regex = new RegExp("\\b" + prohibidas[i] + "\\b", "gi");
        /* Reemplazo las palabras prohibidas por su primera letra y asteriscos */
        var censura = prohibidas[i].charAt(0);
        for(var j = 1; j < prohibidas[i].length; j++){
            censura += '*';
        }
        valor = valor.replace(regex, censura);
    }
    resenia_usr.value = valor;
});