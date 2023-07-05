const header = document.querySelector("header")
const container = document.querySelector("#container.container")
const imgLogo = document.querySelector("#logo.logo")
const buscador= document.querySelector("#buscador")
const footer = document.querySelector("footer")
imgLogo.src = "./img/icon_carrito.png"
//Etiquetas HTML
const retornarHeader = () => { 
 header.innerHTML =   `<nav class="navbar_ppal bg-body-tertiary">
                            <div class="header" id="header">    
                                <h1>Productos Medicinales Respiratorios</h1>
                                <h2><img class="icon" src="./img/icon_pulmones.png" alt="icono">RespiMedic<img class="icon" src="./img/icon_pulmones.png" alt="icono"></h2>
                            </div>
                        </nav>
                      `
} 
retornarHeader()
const retornoCardHTML = (producto) =>{ 
    return `<div class="div-card">
                <img src="./${producto.imagen}" class="imagen">
                <div class="producto"><p>${producto.nombre}</p></div>
                <div class="categoria"><p>${producto.categoria}</p></div>
                <div class="importe"><p>$ ${producto.importe}</p></div>
                <div class="comprar">
                    <button type="button" id="${producto.id}" class="button button-outline">
                        Agregar
                    </button>
                </div>
            </div>`
}
const retornoCardError = () =>{ 
    return `<div class="card-error"> 
                <h2>Tenemos un problema para cargar la pagina.</h2>
                <h3>No encontramos productos para mostrar.</h3>
                <h4>Intenta de nuevo en unos instantes...</h4>
            </div>`
} 
const retornarFooter = () => {
    footer.innerHTML =  `  <div class="link">
                            <h3>Buscanos en las redes</h3>
                                <li class="lista">
                                    <ul class="lista-item">
                                        <a class="lista-link" href="#">
                                            <i class="fab fa-facebook-f">
                                        </i></a>
                                    </ul>
                                    <ul  class="lista-item">
                                        <a class="lista-link" href="">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </ul>
                                    <ul class="lista-item">
                                        <a class="lista-link" href="#"> 
                                            <i class="fab fa-whatsapp"></i>
                                        </a>
                                    </ul>
                                    <ul class="lista-item">
                                        <a class="lista-link" href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </ul>
                                </li>
                            </div>
                            <div class="informacion">
                                <h3 class="servicio">Servicio al cliente</h3>
                                <p>Para mas informacion sobre nuestros productos llame de Lunes a Viernes de 8:00am a 20:00pm al 9999-9999</p>
                                <a href="#">centrodeatencion@RespiMedic.com</a>
                            </div>`
}
retornarFooter()

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

//Botones 
function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.button.button-outline")
    for (let boton of botones){
        boton.addEventListener("click", (e)=>{
            const productoElegido = productos.find((producto)=>producto.id === (e.target.id))
            carrito.push(productoElegido)
            mensajeToast(productoElegido.nombre)
            localStorage.setItem("miCarrito", JSON.stringify(carrito)) 
        })
    }
}

const mensajeToast= (producto) => {
    Toastify({
        text: `${producto} se agregó al carrito.`,
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true,
        style: {
          background: "darkblue",
          color: "white",
        }
      }).showToast();
}

async function obtenerProductos() {
    try {
        const resp = await fetch(URL)          
        const datos = await resp.json()
                productos.push(...datos)
                cargarProductos(productos)
    } catch (error) {
        container.innerHTML = retornoCardError()
    }

}
obtenerProductos(productos)

imgLogo.addEventListener("mousemove", ()=>{  
    imgLogo.title = "Ir al carrito" 
})
