const container = document.querySelector("#container.container")// para las cards
const imgLogo = document.querySelector("#logo.logo")// logo
const selectCategoria = document.querySelector("select#categoria")
const selectMarca = document.querySelector("select#marca")
imgLogo.src = "img/carrito.png"
const creoID = ()=> parseInt(Math.random() * 100_000)//Para agregar productos

const cargarFiltros = (select, array) => {
    if (array.length > 0) {
        array.forEach((elemento) => select.innerHTML += `<option >${elemento.categoria}</option>`)
    }
}
cargarFiltros(selectCategoria, productosCategoria)
cargarFiltros(selectMarca, productosMarca)

/*function agregarProducto() {
                    let id = creoID()
                    let nombre = prompt("Nombre del producto: ").toUpperCase()
                    let marca = prompt("Nombre de la marca: ").toUpperCase().trim()
                    let categoria = prompt("Categoría del producto:").toUpperCase().trim()
                    let importe = parseFloat(prompt("Importe del producto:"))
                    let nuevoProducto = {id: id, nombre: nombre, marca: marca, importe: importe, categoria: categoria} 
                        productos.push(nuevoProducto) 
                        console.log("Agregaste un nuevo producto", nuevoProducto)
                        console.table(productos)        
}*/
function recorrerProductos() {
       productos.forEach((producto)=> console.log(producto)) 
        console.log("Tienes", productos.length,"productos en stock")
}
function buscarProductos(id) { 
    let resultado = productos.find((producto)=> producto.id === parseInt(id))   
    return resultado
}
function buscarUnProducto() { 
    let param = prompt("Ingrese ID del producto")
    const resultado = productos.find((producto)=> producto.id === parseInt(param))   
    if (resultado === undefined){ 
        console.warn("No corresponde a un producto")
        buscarUnProducto()
    }
    else { 
       alert("Encontramos : " + resultado.nombre)
       let respuesta = confirm("¿Deseas ir a comprar?")
       if (respuesta === true) {
           comprar()
           }else Eleccion()
    }
}
function filtrarProductosCategoria() { 
    let param = prompt("Ingrese la categoria del producto: ").toUpperCase() 
    const resultado = productos.filter((producto)=> producto.categoria === (param) )
    resultado.length === 0 ?  console.warn("La categoria no existe. Vuelva a intentarlo") : console.table(resultado) 
}
function filtrarProductosMarca() { 
    let param = prompt("Ingrese la marca del producto: ").toUpperCase() 
    const resultado = productos.filter((producto)=> producto.marca === (param) )
    resultado.length === 0 ?  console.warn("La marca no existe. Vuelva a intentarlo") : console.table(resultado)
} 
function retornoCardHTML(producto) {  
    return `<div class="div-card">
                <div class="imagen"><h1>${producto.imagen}</h1></div>
                <div class="producto"><p>${producto.nombre}</p></div>
                <div class="importe"><p>${producto.importe}</p></div>
                <div class="comprar"><button id="${producto.id}" class="button button-outline">add</button></div>
            </div>`
}
function retornoCardError() { 
    return `<div class="card-error"> 
                <h2>🔍</h2>
                <h2>Tenemos un problema para cargar la pagina.</h2>
                <h3>No encontramos productos para mostrar.</h3>
                <h4>Intenta de nuevo en unos instantes...</h4>
            </div>`
} 
function cargarProductos() {
    container.innerHTML = "" 
    productos.length > 0 ? productos.forEach((producto) => container.innerHTML += retornoCardHTML(producto)) : container.innerHTML = retornoCardError()

    activarClickEnBotones() 
}
cargarProductos()

function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.button.button-outline")// seleccionamos queryselectroALL porque vamos a tomar todoslos botones de todas las cards (comparten la misma caracteristica)
    for (let boton of botones){ // utilizo "for of" porque no es un array, sino una coleccion de elementos
        boton.addEventListener("click", (e)=>{
            const productoElegido = productos.find((producto)=>producto.id === parseInt(e.target.id))
            carrito.push(productoElegido)
            console.clear()
            localStorage.setItem("miCarrito", JSON.stringify(carrito)) 
        })
    }
}

imgLogo.addEventListener("click", ()=>{  //a esa "imgLogo" por la "constante " enlazada arriba
    location.href = "checkout.html" // como estan en el mismo nivel los archivos.HTML se coloca su nombre. NO DIRJE A LA PAG VERRRRRRRRRRRRRRRRRRR
})
imgLogo.addEventListener("mousemove", ()=>{  
    imgLogo.title = "Ir al carrito" // al pasar el mouse por enicma de l aimg, aparece el texto escrito. por la propiedad .title, Similar al "hover" de CSS
})

