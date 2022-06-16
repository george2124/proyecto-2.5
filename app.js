//lista de productos
class Producto{
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = precio.parseFloat(precio);
        this.vendido = false;
    }
    
    sumaIva()  {
        this.precio = this.precio * 1,21;
    }
    vender() {
        this.vendido = true;
    }
}


const productos = [];
productos.push(new Productos("Mancuernas", "6500"));
productos.push(new Productos("PesasRusas", "9000"));
productos.push(new Productos("Guantes", "3500"));
productos.push(new Productos("ConjuntoDepontivoH", "10000"));
productos.push(new Productos("ConjuntoDepontivoM", "12500"));
productos.push(new Productos("BotellaDeAgua", "4500"));

  for(const producto of productos)
  producto.sumaIva();
  producto.vender();

  console.log(productos.producto)
  productos.includes(productos.Productos)

  let filtrado = productos.filter((el) => el.nombre.includes("ConjuntoDepontivo"))
  console.log(filtrado);