class CompraProducto {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    Subtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, producto)=> acc + producto.importe, 0)
        }
    }
}
