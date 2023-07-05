function recuperarLS() {
    if (localStorage.getItem("miCarrito")){
        return JSON.parse(localStorage.getItem("miCarrito"))
    }
}  
const carrito = recuperarLS() || []
const URL = "js/productos.json"
const productos = []
                