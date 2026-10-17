const formulario = document.querySelector("#formContacto");
const mensaje = document.querySelector("#mensaje");
formulario.addEventListener("submit", (evento) => {
evento.preventDefault();
const nombre = document.querySelector("#nombre").value.trim();
const correo = document.querySelector("#correo").value.trim();
if (nombre === "" || !correo.includes("@")) {
mensaje.textContent = "Por favor completa tu nombre y un correo válido.";
mensaje.style.color = "crimson";
return;
}
mensaje.textContent = `¡Gracias, ${nombre}! Te contactaremos pronto.`;
mensaje.style.color = "green";
formulario.reset();
});