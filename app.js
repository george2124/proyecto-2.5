//lista de productos
class Producto{
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    
    sumaIva()  {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}


const productos = [];
productos.push(new Producto("Mancuernas", 6500));
productos.push(new Producto("PesasRusas", 9000));
productos.push(new Producto("Guantes", 3500));
productos.push(new Producto("ConjuntoDepontivoH", 10000));
productos.push(new Producto("ConjuntoDepontivoM", 12500));
productos.push(new Producto("BotellaDeAgua", 4500));

  for(const producto of productos){
    producto.sumaIva();
    producto.vender();
  }
  

  console.log(productos);
  const item = prompt("Busque su Producto"); 

 // productos.includes(productos.Productos)

  let filtrado = productos.filter((el) => el.nombre.includes(item.toUpperCase()));
  if (filtrado){
    console.log("se encontro el producto");
    console.log(filtrado);
  } else {
    console.log("no se encontro el producto");
  }


  