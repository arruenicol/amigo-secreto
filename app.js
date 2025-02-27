let amigo = [];



function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();

    if(!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }

    let validarAmigo = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!validarAmigo.test(nombreAmigo)) {
        alert("El nombre solo debe contener letras");
        return;}

    nombreAmigo = nombreAmigo.charAt(0).toUpperCase() + nombreAmigo.slice(1).toLowerCase();

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigo();
}

function renderizarAmigo(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML="";
    
    for (let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }else if(amigo.length===1){
        alert("Agregue al menos 1 amigo más");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById('listaAmigos')
    limpiarLista.innerHTML = "";
}

function limpiarResultado(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML= "";

}
