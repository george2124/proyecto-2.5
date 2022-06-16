//lista de productos

const listaNombres = [];
let cantidad = 10;
//Empleo de do...while para cargar nombres en el array por prompt()
do {
    let entrada = prompt ("Ingresar nombres");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
} while (listaNombres.length != cantidad);
//concatenamos un mismo array de dos elementos
const nuevaLista = listaNombres.concat(["proteina" , "aminiaciso"]);
//salida con salto de linea join
alert(nuevaLista.join("\n"));