const imgLogo = document.querySelector("#logo.logo")
imgLogo.src = "img/carrito.png"
// Tablas de carritos
const tbody = document.querySelector("tbody")
function retornarTablasHTML(carrito) {
    return `<tr>
                <td>${carrito.id}</td>
                <td>${carrito.nombre}</td>
                <td>${carrito.importe}</td>
                <td><img src="img/eliminar.png" width="30px"></td>
            </tr>`
}
function retornoCardError() { 
    return `<div class="card-error"> 
                <h2>🔍</h2>
                <h2>Tenemos un problema para cargar la pagina.</h2>
                <h3>No encontramos productos en el carrito para mostrar.</h3>
                <h4>Intenta de nuevo en unos instantes...</h4>
            </div>`
} 
carrito.length > 0 ? carrito.forEach(productoCarrito => tbody.innerHTML += retornarTablasHTML(productoCarrito)) : container.innerHTML = retornoCardError()  
// btn de compra
const tbnComprar = document.querySelector("#btnComprar")
tbnComprar.addEventListener("click", ()=>{
    carrito.length > 0 ? finalizarcompra() : alert("Sigue comprando")})
function finalizarcompra() {
    resultado = confirm("¿Desea finalizae la compra?")
    resultado === true ? calculoTotal() : alert("Sigue comprando") 
}
function calculoTotal() {
    total = carrito.reduce((acc, producto)=> acc + producto.importe, 0) 
    alert("El costo total de la compra es $: " + total) 
}