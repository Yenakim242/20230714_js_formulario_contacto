// 1. Telefono (vacío o no, RegExp)
// 2. Mensaje (min 10 caracteres)
// keyup: todos los campos

// gets
let form = document.getElementsByTagName("form")[0];
let errorMsg = document.getElementsByClassName("errorMsg");
let nombreInput = document.getElementById("nombreInput");
let emailInput = document.getElementById("emailInput");
let mensajeTextarea = document.getElementById("mensajeTextarea");

// regExp

let regExpEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
form.addEventListener("submit", (e) =>{
    e.preventDefault(); // para el submit
    // Validación: Primero reseteamos los estilos de error de los campos y borramos los mensajes error, para luego comprobar...
    resetEstiloMensajesError();
    // nombre
    if (nombreInput.value.length === 0) {// Si está vacío
        nombreInput.classList.add("errorInput");
        errorMsg[0].textContent = "Rellena el campo de nombre.";
    }
    // Email
    if (emailInput.value.length === 0) {// Si está vacío
        emailInput.classList.add("errorInput");
        errorMsg[1].textContent = "Rellena el campo de eamil.";
    } else if (!regExpEmail.test(emailInput.value)) {
        emailInput.classList.add("errorInput");
        errorMsg[1].textContent = "Añade un email correcto.";
    }
    // mensaje
    if (mensajeTextarea.value.length===0) {// Si está vacío.
        mensajeTextarea.classList.add("errorInput");
        errorMsg[2].textContent = "Rellena el campo de mensaje.";
    } else if (mensajeTextarea.value.length < 10) {
        mensajeTextarea.classList.add("errorInput");
        errorMsg[2].textContent = "Añade mínimo 10 caracteres.";
    }
})

// Función para resetear
function resetEstiloMensajesError() {
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("errorInput");
        errorMsg[i].textContent = "";
    }
    mensajeTextarea.classList.remove("errorInput");
    mensajeTextarea.textContent = "";
}