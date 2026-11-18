const boton = document.getElementById("miBoton");
const mensajeExtra = document.getElementById("mensajeExtra");

// Un arreglo con datos históricos para que cambien al hacer clic
const datosHistoricos = [
    "🏆 El Real Madrid fue elegido por la FIFA como el Mejor Club del Siglo XX.",
    "⭐ Cuenta con 15 Copas de Europa (Champions League), siendo el dominador histórico de la competición.",
    "🏟️ El Estadio Santiago Bernabéu es uno de los recintos deportivos más modernos y tecnológicamente avanzados del mundo."
];

boton.addEventListener("click", () => {
    // Elige un dato aleatorio de la lista cada vez que haces clic
    const indiceAleatorio = Math.floor(Math.random() * datosHistoricos.length);
    
    mensajeExtra.textContent = datosHistoricos[indiceAleatorio];
    mensajeExtra.classList.remove("hidden");
});