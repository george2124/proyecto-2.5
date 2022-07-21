//formulario
let miformulario = document.getElementById("formularioId");
miformulario.addEventListener("submit", enviarformulario);

function enviarformulario(e){
    e.preventDefault();
    alert("SUS DATOS SE ENVIARON CON EXITO");
}
