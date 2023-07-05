const Header = document.querySelector("header")
const Thead = document.querySelector("Thead")
const tbody = document.querySelector("tbody")
const btnComprar = document.querySelector("#div-comprar")
const animacionImg =  `<img class="gif" src="img/gif_cargando.gif">`
//Etiquetas HTML 
const retonrarThead = () => {
 Thead.innerHTML = `<tr>
                        <th id="tablehead">Descripción</th>
                        <th id="tablehead">Importe</th>
                        <th id="tablehead">Quitar</th>
                    </tr>`
}
retonrarThead()

const retornarBtnComprar = () => {
    btnComprar.innerHTML = `<button class="button" id="btnComprar">Comprar</button>`
}
retornarBtnComprar()

const retornarHeader = () => {
    Header.innerHTML = `<nav class="navbar_ppal  bg-body-tertiary">
                            <div class="header" id="header">    
                                <h1>Productos Medicinales Respiratorios</h1>
                                <h2><img class="icon" src="./img/icon_pulmones.png" alt="icono">RespiMedic<img class="icon" src="./img/icon_pulmones.png" alt="icono"></h2>
                            </div>
                        </nav>
                        <div class="header_boton_volver">
                            <a href="index.html">
                                <button class="button_volver" id="btnVolver">Seguir comprando</button>
                            </a>
                        </div>`
}
retornarHeader()

const retornarTablasHTML = (carrito) => {
    return `<tr>
                <td>${carrito.nombre}</td>
                <td>$ ${carrito.importe}</td>
                <td><button id="${carrito.id}" class="button button-outline button-borrar">Quitar</button></td>
            </tr>`
}

const cargarCarrito= () => {
    tbody.innerHTML = ""
    carrito.length > 0 && carrito.forEach((productoCarrito) => tbody.innerHTML += retornarTablasHTML(productoCarrito)) 
    activarClickBotonesBorrar()  
} 
cargarCarrito()

// btn de compra
const activarBtnComprar= () => {
    btnComprar.addEventListener("click", ()=>{
        if (carrito.length > 0) {
            calcularTotal()
        }})
}
activarBtnComprar()

const calcularTotal= () => {
    btnComprar.innerHTML =  animacionImg
    const timer = parseInt(Math.random() * 10000)
    setTimeout(() => {
        total = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
        alertaDosBtn()
        retornarBtnComprar()
    }, timer);
}



const alertaDosBtn= () => {
    Swal.fire({
        title: '¿Confirmas tu compra?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Felicitaciones has comprado los productos', '', 'success')        
            localStorage.removeItem("miCarrito")
            tbody.innerHTML = ""
        } else {
          Swal.fire('Sigue comprando!!', '', 'info')
        }
      })
}
//btn eliminar
function activarClickBotonesBorrar() {
    const botonesBorrar =document.querySelectorAll("button.button-outline.button-borrar")
    if (botonesBorrar.length > 0 ) {
        for (let boton of botonesBorrar)
        boton.addEventListener(`click`, (e) =>{
            Swal.fire({
                title: '¿ Deseas eliminar este producto del carrito ?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#30d659',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Acepto'
              }).then((result) => { 
                if (result.isConfirmed) {
                    let indice = carrito.findIndex((producto)=> producto.id === (e.target.id))
                    if (indice  > -1 ){
                        carrito.splice(indice, 1)
                        localStorage.setItem("miCarrito", JSON.stringify(carrito)) 
                        cargarCarrito()   
                    }
                    mensajeToastEliminar()
                }
            })         
        })
    }  
}

const mensajeToastEliminar= () => {
    Toastify({
        text: `El producto se eliminó del carrito.`,
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true,
        style: {
          background: "darkred",
          color: "white",
        }
      }).showToast();
}

