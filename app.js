//lista de productos
class Producto{
    constructor(id, nombre, precio, url) {
        this.id = id;
        this.nombre  = nombre;
        //this.nombre  = nombre.toUpperCase();
        this.precio  = precio;
        //this.precio  = parseFloat(precio);
        this.url = url;
        this.vendido = false;
    }
    
    sumaIva()  {
        this.precio *= 1.21;
    }
    vender() {
        this.vendido = true;
    }
}


const productos = [];

productos.push(new Producto(1,"Mancuernas", 6500, "https://www.hola.com/imagenes/seleccion/20211020198094/mejores-pesas/1-9-789/pesas-1-a-a.jpg"));
productos.push(new Producto(2,"Pesas Rusas", 9000,"../imag/pesas rusas.jpg"));
productos.push(new Producto(3,"Guantes", 3500, "../imag/guantes.jpg"));
productos.push(new Producto(4,"Conjunto Depontiv Hombre", 10000, "../imag/conjunto.jpg"));
productos.push(new Producto(5,"Conjunto Depontivo Mujer", 12500, "../imag/conjunto de mujer2.jpg"));
productos.push(new Producto(6,"Botella De Agua", 4500, "../imag/bottella dde agua (1).jpg"));

let container3 = document.getElementById("container3");

  for(const producto of productos){
    producto.sumaIva();
    producto.vender();

    let div = document.createElement("div");
    div.className = "card"
    div.innerHTML = `
                     <img class = "img-card" src="${producto.url}" alt=""> 
                     <p class= "id-card">Id: ${producto.id}</p> 
                     <p class = "nombre-card"> ${producto.nombre}</p>
                     <p class = "precio-card">$ ${producto.precio}</p> 
                    `;    
    container3.append(div); 
  }
  

  
  
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



  //formulario
  let miformulario = document.getElementById("formulario");
  miformulario.addEventListener("submit", validarformulario);
  
  function validarformulario(e){
      e.preventDefault();
      let formulario = e.target
      console.log(formulario.children[0].value);
      console.log(formulario.children[1].value);
      // formulario.children[1].value = "";
     
      // if(formulario.children[0].value === "andres"){
      //     formulario.children[1].value = "";
      // }
  }

