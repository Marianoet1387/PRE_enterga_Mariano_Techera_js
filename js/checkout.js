const imgLogo = document.querySelector("#logo.logo")
imgLogo.src = "img/carrito.png"
// Tablas de carritos
const tbody = document.querySelector("tbody")
function retornarTablasHTML(carrito) {
    return `<tr>
                <td>${carrito.id}</td>
                <td>${carrito.nombre}</td>
                <td>${carrito.importe}</td>
                <td><img src="img/eliminar.png" id="${carrito.id}"  width="30px"></td>
            </tr>`
}
function retornoCarritoError() { 
    return `<div class="card-error"> 
                <h2>🔍</h2>
                <h2>Tenemos un problema para cargar la pagina.</h2>
                <h3>No encontramos productos en el carrito para mostrar.</h3>
                <h4>Intenta de nuevo en unos instantes...</h4>
            </div>`
} 
carrito.length > 0 ? carrito.forEach(productoCarrito => tbody.innerHTML += retornarTablasHTML(productoCarrito))  : tbody.innerHTML = retornoCarritoError() 

//btn para elimnar productos
function avtivarBotonosEliminar() {
    const botonesEliminar = document.querySelectorAll("img")
   for (let botonEliminar of botonesEliminar){
    botonEliminar.addEventListener("click", ()=>{
        let indice = carrito.findIndex((producto)=> producto.id === parseInt(botonEliminar.id))
        if (indice > -1 ) { 
            carrito.splice(indice, 1)
        }
    })
   }
}

// btn de compra
const tbnComprar = document.querySelector("#btnComprar")
tbnComprar.addEventListener("click", ()=>{
    carrito.length > 0 ? calculoTotal() : mostrarMensajes("Sigue comrando") 
})

function calculoTotal() {
    total = carrito.reduce((acc, producto)=> acc + producto.importe, 0) 
    mostrarMensajes("El costo total de la compra es $: " + total)
}
const mostrarMensajes = (msg)=> {
    const divMsg = document.querySelector('div.msg-carrito')
    divMsg.textContent = msg || ''
}
