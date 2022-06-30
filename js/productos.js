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

productos.push(new Producto(1,"Mancuernas", 6500, "../imag/descarga, mancuernas.jpg"));
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
                     <button class="btn-card" onclick="agregarCarrito(${producto.id})">Agregar a Carrito</button>`;    
    container3.append(div); 
  }
  
  let carrito = [];
  let numeroCarrito = document.getElementById("numeroCarrito");

  function comprar(id){

    const producto = productos.find(el => el.id === id);
    carrito.push(producto);
    numeroCarrito.innerHTML = carrito.length
    agregarCarrito(carrito.length - 1)
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));
  }

  let carritoDom = document.getElementById("carrito");


  let total = document.getElementById("total")
  
  function vaciar(){
    total.innerHTML = "0"
    carritoDom.innerHTML = ""
  }

  carrito = JSON.parse(localStorage("carritoLocal")) || [];
  carritoLocalStorage()

  function agregarCarrito(parametro){
     const producto = productos.find(el => el.id === parametro);
     let div = document.createElement("div");
     div.id = `carrito-${producto.id}`;
     div.className = "carritostyle"
     div.innerHTML = `
                <p>Id: ${producto.id}</p>
                <p>${producto.nombre}</p>
                <p>$${producto.precio}</p>
                <button class="btn-card" onclick = "eliminar(${producto.id})">Eliminar</button>`;
    
     total.innerHTML = total.innerHTML*1 + producto.precio           

  carritoDom.append(div)
}

function eliminar(idEliminar){
  const eliminar = document.getElementById(`carrito-${idEliminar}`);
  eliminar.remove();
  carrito = carrito.filter(el => el.id !== idEliminar)
      const producto = productos.find(el => el.id === idEliminar)
      total.innerHTML = total.innerHTML*1 - producto.precio
  numeroCarrito.innerHTML = carrito.length 
}


  

  
