// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// array para almacenar los nombres
let amigos = [];

// Funcion agregar Amigos
let lista = document.getElementById('listaAmigos');
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value
    if(nombre == ''){
        alert('Por favor, inserte un nombre');
    } else if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista')   
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
        actualizarAmigos();
    }
}

// función para actualizar la lista de amigos, Limpiar la lista
function actualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    // Bucle
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debe tener al menos 2 amigos para sortear.');
        return;
    } else if (amigos.length === 1) {
        alert('Todos los nombres ya han sido sorteados.');
        return;
    } else {
        let random = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        let ganador = amigos[random]; // Guarda el nombre del ganador

        // Muestra el ganador
        resultado.innerHTML = `¡El amigo sorteado es: ${ganador}!`;

        // Limpia la lista visual y muestra solo al ganador
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
        let ganadorElemento = document.createElement('li');
        listaAmigos.appendChild(ganadorElemento);

        // Limpia el arreglo de amigos y agrega solo al ganador
        amigos = [ganador]; // Actualiza el array con solo el ganador
    }
}
