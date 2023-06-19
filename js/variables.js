function recuperarLS() {
    if (localStorage.getItem("miCarrito")){
        return JSON.parse(localStorage.getItem("miCarrito"))
    }
}  
const carrito = recuperarLS() || []
const productos = [{id: 12345, nombre: "MASCARA ORONASAL S ", marca: "RESMED" , importe: 20_000, categoria: "MASCARAS", imagen:'img/icon.png'}, 
                   {id: 23453, nombre: "MASCARA FACIAL L ", marca: "RESMED", importe: 25_000, categoria: "MASCARAS", imagen:'img/icon.png'},
                   {id: 34569, nombre: "MASCARA ORONASAL L ", marca: "RESMED", importe: 22_000, categoria: "MASCARAS", imagen:'img/icon.png'},
                   {id: 90126, nombre: "AIRSENSE 10 AUTOSET", marca: "RESMED", importe: 100_000, categoria: "EQUIPOS AUTOCPAP", imagen:'img/icon.png'},
                   {id: 90127, nombre: "DREAM STATION", marca: "PHILIPS", importe: 150_000, categoria: "EQUIPOS AUTOCPAP", imagen:'img/icon.png'},
                   {id: 15151, nombre: "MASCARA FACIAL L ", marca: "RESMED", importe: 25_000, categoria: "MASCARAS", imagen:'img/icon.png'},
                   {id: 34589, nombre: "MASCARA ORONASAL L ", marca: "RESMED", importe: 22_000, categoria: "MASCARAS", imagen:'img/icon.png'},
                   {id: 90006, nombre: "AIRSENSE 10 AUTOSET", marca: "RESMED", importe: 100_000, categoria: "EQUIPOS AUTOCPAP", imagen:'img/icon.png'},
                   {id: 90007, nombre: "DREAM STATION", marca: "PHILIPS", importe: 150_000, categoria: "EQUIPOS AUTOCPAP", imagen:'img/icon.png'}]


const productosCategoria = [{categoria: "MASCARAS"},
                            {categoria: "EQUIPOS AUTOCPAP"},
                            {categoria: "EQUIPOS BIPAP"},
                            {categoria: "CPAP"},]
const productosMarca = [{categoria: "RESMED"},
                        {categoria: "PHILIPS"},]