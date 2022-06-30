//formulario
let miformulario = document.getElementById("formulario");
miformulario.addEventListener("submit", validarformulario);

function validarformulario(e){
    e.preventDefault();
    let formulario = e.target
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value);
    formulario.children[1].value = "";
   
 
}