// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//esta funcion se encarga de agregar un amigo a la lista
function agregarAmigo() {
  document.getElementById("resultado").innerHTML = ""; // Borrar mensaje de resultado si existe
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();
  // validacion del nombre
  if (nombre === "") {
    alert("Ingresa un nombre");
    return;
  } else if (nombre.length < 3 || nombre.length > 10) {
    alert("El nombre debe tener entre 3 y 10 caracteres.");
    input.value = "";
    input.focus();
    return;
  } else if (nombre.includes(" ") || nombre.includes(",")) {
    alert("El nombre no debe contener espacios ni comas.");
    input.value = "";
    input.focus();
    return;
    // aqui se encarga de validar sin numeros
  } else if (/\d/.test(nombre)) {
    alert("El nombre no puede contener números.");
    input.value = "";
    input.focus();
    return;
  } else if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    input.value = "";
    input.focus();
    return;
  } else {
    amigos.push(nombre);
    //para depuracion se muestra un console.log
    //console.log(amigos);
    mostrarLista();
  }
  // Limpiar
  input.value = "";
  input.focus();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
}
