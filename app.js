//lista de productos
// class Producto{
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
    
//     sumaIva()  {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }


// const productos = [];
// productos.push(new Producto("Mancuernas", 6500));
// productos.push(new Producto("PesasRusas", 9000));
// productos.push(new Producto("Guantes", 3500));
// productos.push(new Producto("ConjuntoDepontivoH", 10000));
// productos.push(new Producto("ConjuntoDepontivoM", 12500));
// productos.push(new Producto("BotellaDeAgua", 4500));

//   for(const producto of productos){
//     producto.sumaIva();
//     producto.vender();
//   }
  

//   console.log(productos);
//   const item = prompt("Busque su Producto"); 

 // productos.includes(productos.Productos)

  // let filtrado = productos.filter((el) => el.nombre.includes(item.toUpperCase()));
  // if (filtrado){
  //   console.log("se encontro el producto");
  //   console.log(filtrado);
  // } else {
  //   console.log("no se encontro el producto");
  // }

//agregando productos

const productos = [
  {id: 1, nombre:"camisa", precio:150},
  {id: 2, nombre:"pantalon", precio:200},
  {id: 3, nombre:"gorra", precio:300},
  {id: 4, nombre:"saco", precio:400},
];
let padre = document.getElementsByClassName("produ");

for(const producto of productos){
  let contenedor = document.createElement("div");
  
  contenedor.innerHTML = `<h2>ID: ${producto.id}</h2> 
                          <p>Producto: ${producto.nombre}</p>
                          <b>$ ${producto.precio}</b> `;    
  padre.append(contenedor);                                          
}

// let titulo = document.createElement("./pages");
// let seccion = prompt("ingrese si quieres ver nuestros productos o redes");

// if(seccion === "producto"){
//   titulo.innerHTML = "./prouctos.html"
// }else if(seccion === "redes"){
//     titulo.innerHTML = "./contacto.html"
// }else{
//     titulo.innerHTML = "index.html"
// }

// document.body.append(titulo);