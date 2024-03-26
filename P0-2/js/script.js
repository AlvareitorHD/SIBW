const boton = document.getElementById("boton1");
const parrafo = document.getElementById("parrafo");
const linea = document.getElementById("linea");

boton.addEventListener('click',() => {
    parrafo.textContent = "Pulsjvbebvubv\n";
});

function otraMas(){
    const fecha = new Date();
    parrafo.textContent += "En el momento "+fecha.toDateString();
}

boton.addEventListener('click',otraMas);

linea.addEventListener('keyup', () =>{
    let valor = linea.value;
    valor = valor.replace(/\bputa\b/gi, "p***");
    linea.value = valor;
});