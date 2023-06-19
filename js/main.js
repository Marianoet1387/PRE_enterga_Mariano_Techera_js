const container = document.querySelector("#container.container")
const imgLogo = document.querySelector("#logo.logo")
const selectCategoria = document.querySelector("select#categoria")
const selectMarca = document.querySelector("select#marca")
const buscador= document.querySelector("#buscador")
imgLogo.src = "img/carrito.png"

const cargarFiltrosHTML = (select, array) => {
    if (array.length > 0) {
        array.forEach((elemento) => select.innerHTML += `<option> ${elemento.categoria}</option>`)
       }
}
cargarFiltrosHTML(selectCategoria, productosCategoria)
cargarFiltrosHTML(selectMarca, productosMarca)

const retornoCardHTML = (producto) =>{ 
    return `<div class="div-card">
                <img src="./${producto.imagen}" class="imagen">
                <div class="producto"><p>${producto.nombre}</p></div>
                <div class="categoria"><p>${producto.categoria}</p></div>
                <div class="importe"><p>${producto.importe}</p></div>
                <div class="comprar"><button id="${producto.id}" class="button button-outline">add</button></div>
            </div>`
}
const retornoCardError = () =>{ 
    return `<div class="card-error"> 
                <h2>Tenemos un problema para cargar la pagina.</h2>
                <h3>No encontramos productos para mostrar.</h3>
                <h4>Intenta de nuevo en unos instantes...</h4>
            </div>`
} 
const filtrarProductos = ()=> {
    let arrayResultado = productos.filter((producto)=> producto.nombre.toUpperCase().includes(buscador.value.trim().toUpperCase()))
    if (arrayResultado.length > 0) {
        cargarProductos(arrayResultado)
    }
}
buscador.addEventListener('search', filtrarProductos)

const cargarProductos = (array)=> {
    container.innerHTML = ''
    array.length > 0 ? array.forEach((producto) => container.innerHTML += retornoCardHTML(producto)) : container.innerHTML = retornoCardError()
    activarClickEnBotones() 
}
cargarProductos(productos)

function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.button.button-outline")
    for (let boton of botones){
        boton.addEventListener("click", (e)=>{
            const productoElegido = productos.find((producto)=>producto.id === parseInt(e.target.id))
            carrito.push(productoElegido)
            console.clear()
            localStorage.setItem("miCarrito", JSON.stringify(carrito)) 
        })
    }
}

imgLogo.addEventListener("mousemove", ()=>{  
    imgLogo.title = "Ir al carrito" 
})

