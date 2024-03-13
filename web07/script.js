// Definir la fecha límite
var fechaLimite = new Date('2024-04-01');
// Formatear la fecha en formato legible
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var fechaFormateada = fechaLimite.toLocaleDateString('es-ES', options);
// Mostrar la fecha en el elemento HTML correspondiente
document.getElementById('fecha-limite').innerText = fechaFormateada;
