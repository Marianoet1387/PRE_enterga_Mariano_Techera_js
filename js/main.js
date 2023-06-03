const carrito = []
const productos = [{id: 12345, nombre: "MASCARA ORONASAL S ", marca: "RESMED" , importe: 20_000, categoria: "MASCARAS"}, 
                   {id: 23453, nombre: "MASCARA FACIAL L ", marca: "RESMED", importe: 25_000, categoria: "MASCARAS"},
                   {id: 34569, nombre: "MASCARA ORONASAL L ", marca: "RESMED", importe: 22_000, categoria: "MASCARAS"},
                   {id: 90126, nombre: "AIRSENSE 10 AUTOSET", marca: "RESMED", importe: 100_000, categoria: "EQUIPOS AUTOCPAP"},
                   {id: 90127, nombre: "DREAM STATION", marca: "PHILIPS", importe: 150_000, categoria: "EQUIPOS AUTOCPAP"}]
const creoID = ()=> parseInt(Math.random() * 100_000)
function agregarProducto() {
                    let id = creoID()
                    let nombre = prompt("Nombre del producto: ").toUpperCase()
                    let marca = prompt("Nombre de la marca: ").toUpperCase().trim()
                    let categoria = prompt("Categoría del producto:").toUpperCase().trim()
                    let importe = parseFloat(prompt("Importe del producto:"))
                    let nuevoProducto = {id: id, nombre: nombre, marca: marca, importe: importe, categoria: categoria} 
                        productos.push(nuevoProducto) 
                        console.log("Agregaste un nuevo producto", nuevoProducto)
                        console.table(productos)        
}
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
    }
    else { 
       alert("Encontramos : " + resultado.nombre)
    }
}
function quitarProducto() {
    let param = prompt("ingresa el ID del producto a quitar")
    let indice = productos.findIndex((producto)=> producto.id === parseInt(param))
    if (indice > -1 ) { 
        productos.splice(indice, 1)
        recorrerProductos()
    }else{
        console.warn("No se encontro el producto indicado: ", param)
    }
}

function filtrarProductosCategoria() { 
    let param = prompt("Ingrese la categoria del producto: ").toUpperCase() 
    const resultado = productos.filter((producto)=> producto.categoria === (param) )
    if (resultado.length === 0){
        console.warn("La categoria no existe. Vuelva a intentarlo")
    }else {
        console.table(resultado)
    }
} 
function filtrarProductosMarca() { 
    let param = prompt("Ingrese la marca del producto: ").toUpperCase() 
    const resultado = productos.filter((producto)=> producto.marca === (param) )
    if (resultado.length === 0){
        console.warn("La marca no existe. Vuelva a intentarlo")
    }else {
        console.table(resultado)
    }
} 
function finalizarCompra() {
    const shopp = new CompraProducto(carrito) 
    console.table(carrito)
    alert("El costo total de la compra es $: " + shopp.Subtotal() )
}
function comprar() { 
    let id = prompt("Ingresa el ID de tu producto seleccionado: ") 
    let productoSeleccionado = buscarProductos(id)  
       if (productoSeleccionado !== undefined) {
           carrito.push(productoSeleccionado)
           alert(productoSeleccionado.nombre + "de la marca " + productoSeleccionado.marca +  " se cargo al carrito de compras con exito") 
           let respuesta = confirm("¿ Deseas comprar otro producto ?")
           if (respuesta === true ) {
               comprar() 
           }else {
               finalizarCompra()
           } 
       }else {
           alert("Error en el codigo selecionado. Vuelva a intentar")
       }
   }
