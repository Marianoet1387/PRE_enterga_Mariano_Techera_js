const tbody = document.querySelector("tbody")
const tbnComprar = document.querySelector("#btnComprar")
function retornarTablasHTML(carrito) {
    return `<tr>
                <td>${carrito.id}</td>
                <td>${carrito.nombre}</td>
                <td>${carrito.importe}</td>
                <td><button onclick="borrarProductos(${carrito.id})" class="button button-outline">borrar</button></td>
            </tr>`
}
function cargarCarrito() {
    if (carrito.length > 0) {
        carrito.forEach(productoCarrito => tbody.innerHTML += retornarTablasHTML(productoCarrito))  
    }
} 
cargarCarrito()
// btn de compra
tbnComprar.addEventListener("click", ()=>{
    if (carrito.length > 0) {
        calculoTotal()
    }})

function calculoTotal() {
    total = carrito.reduce((acc, producto)=> acc + producto.importe, 0) 
    mostrarMensajes("El costo total de la compra es $: " + total)
}
//btn eliminar
function borrarProductos(id) {
    const indice = carrito.findIndex((producto)=> {
        return producto.id === id
    })  
    carrito.splice(indice, 1)
    localStorage.setItem("miCarrito", JSON.stringify(carrito)) 
    mostrarMensajes(`Se elimino el producto seleccionado`)
    cargarCarrito()   
}