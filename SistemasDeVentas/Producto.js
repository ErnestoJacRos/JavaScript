class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProductos = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProductos;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre( nombre){
        this._nombre = nombre;
    }
    
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `Id_Producto: ${this._idProductos}, Nombre_Procduto: ${this._nombre}, Precio_Producto: $${this._precio}` 
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = []
       // this._contadorProductosAgragados = 0;
    }
    static get MAX_PRODUCTOS (){
        return 5;
    }
    get idOrden(){
        return this._idOrden;
    }

    agregrarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("No se pueden agregar más productos")
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for (const producto of this._productos) {
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = '';

        for (const producto of this._productos) {
            
            productoOrden +=  `\n{`+ producto.toString() + ' }';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal() }, Productos: ${productoOrden}`)
    }
}

let producto1 = new Producto('Café', 78.00);
let producto2 = new Producto('Pantalon',400);
let producto3 = new Producto('Dado',25)

let orden1 =  new Orden();

orden1.agregrarProducto(producto1);
orden1.agregrarProducto(producto2);
orden1.agregrarProducto(producto3)
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregrarProducto(producto3);
orden2.agregrarProducto(producto2);
orden2.agregrarProducto(producto1);
orden2.agregrarProducto(producto1);
orden2.agregrarProducto(producto1);
orden2.agregrarProducto(producto1);
orden2.mostrarOrden();