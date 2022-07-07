//Constructor de productos con metodo de sumar iva, producto vendido
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

//Array de productos con push

const productos = [];

productos.push(new Producto(1,"Mancuernas", 6500, "../imag/descarga, mancuernas.jpg"));
productos.push(new Producto(2,"Pesas Rusas", 9000,"../imag/pesas rusas.jpg"));
productos.push(new Producto(3,"Guantes", 3500, "../imag/guantes.jpg"));
productos.push(new Producto(4,"Conjunto Depontivo Hombre", 10000, "../imag/conjunto.jpg"));
productos.push(new Producto(5,"Conjunto Depontivo Mujer", 12500, "../imag/conjunto de mujer2.jpg"));
productos.push(new Producto(6,"Botella De Agua", 4500, "../imag/bottella dde agua (1).jpg"));

//Variable
let container3 = document.getElementById("container3");

//for of para sumar iva y agregar al dom
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
  
  //variable
  let carrito = [];
  let numeroCarrito = document.getElementById("numeroCarrito");
  
  //funcion comprar con una alert
  function comprar(){
     carrito.length >= 1 ? terminarCompra() : Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    text: 'El Carrito se encuentra vacio!',
                                                    footer: '<a href="">Verifique su compra!!</a>'
    })  
   
  }
  
  function terminarCompra(){
    // alert("Su compra se completo")
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Su compra se a concretado',
      showConfirmButton: false,
      timer: 2000
    })
    vaciar()
  }

  //Variable
  let carritoDom = document.getElementById("carrito");
  
  let total = document.getElementById("total")
  
  //Funcion de vaciar carrito
  function vaciar(){
    numeroCarrito.innerHTML = "0"
    total.innerHTML = "0"
    carritoDom.innerHTML = ""
    localStorage.removeItem("carritoLocal")
    carrito = [];
  }
  //Trae los pructos de localStorage 
  carrito = JSON.parse(localStorage.getItem("carritoLocal")) || [];
  recargarPagina()
  
  //Agrega los productos al carrito y los renderiza
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
     numeroCarrito.innerHTML = numeroCarrito.innerHTML*1 + 1 
     carrito.push(producto)     
     localStorage.setItem("carritoLocal", JSON.stringify(carrito))
  carritoDom.append(div)
}

 //funcion elimina, elimina uno a uno los prouctos del carrito
function eliminar(idEliminar){
  const eliminar = document.getElementById(`carrito-${idEliminar}`);
  eliminar.remove();
  carrito = carrito.filter(el => el.id !== idEliminar)
      const producto = productos.find(el => el.id === idEliminar)
      total.innerHTML = total.innerHTML*1 - producto.precio
      numeroCarrito.innerHTML = numeroCarrito.innerHTML*1 - 1
  numeroCarrito.innerHTML = carrito.length 
  localStorage.setItem("carritoLocal", JSON.stringify(carrito))
}


function recargarPagina(){
  for ( const producto of carrito ){
    let div = document.createElement("div");
     div.id = `carrito-${producto.id}`;
     div.className = "carritostyle"
     div.innerHTML = `
                <p>Id: ${producto.id}</p>
                <p>${producto.nombre}</p>
                <p>$${producto.precio}</p>
                <button class="btn-card" onclick = "eliminar(${producto.id})">Eliminar</button>`;
  
    carritoDom.append(div);
  }
  numeroCarrito.innerHTML = carrito.length
}

  

  
