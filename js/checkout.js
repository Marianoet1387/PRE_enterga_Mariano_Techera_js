const tbody = document.querySelector("tbody")
const tbnComprar = document.querySelector("#btnComprar")
function retornarTablasHTML(carrito) {
    return `<tr>
                <td>${carrito.id}</td>
                <td>${carrito.nombre}</td>
                <td>${carrito.importe}</td>
                <td><button id="${carrito.id}" class="button button-outline button-borrar">borrar</button></td>
            </tr>`
}
function cargarCarrito() {
    tbody.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach(productoCarrito => tbody.innerHTML += retornarTablasHTML(productoCarrito)) 
        activarClickBotonesBorrar()  
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
function activarClickBotonesBorrar() {
    const botonesBorrar =document.querySelectorAll("button.button-outline.button-borrar")
    if (botonesBorrar.length > 0 ) {
        for (let boton of botonesBorrar)
        boton.addEventListener(`click`, (e) =>{
            let indice = carrito.findIndex((producto)=> producto.id === parseInt(e.target.id))
            if (indice  > -1 ){
                carrito.splice(indice, 1)
                localStorage.setItem("miCarrito", JSON.stringify(carrito)) 
                mostrarMensajes(`Se elimino el producto seleccionado`)
                cargarCarrito()   
            }
        })
    }  
}