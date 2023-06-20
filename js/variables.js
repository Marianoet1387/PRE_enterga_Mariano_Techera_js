function recuperarLS() {
    if (localStorage.getItem("miCarrito")){
        return JSON.parse(localStorage.getItem("miCarrito"))
    }
}  
const carrito = recuperarLS() || []
const productos = [{id: 12345, nombre: "MASCARA ORONASAL  ", marca: "RESMED" , importe: 20_000, categoria: "MASCARAS", imagen:'img/mascaras_oronasal.jpg'}, 
                   {id: 23453, nombre: "MASCARA FACIAL  ", marca: "RESMED", importe: 25_000, categoria: "MASCARAS", imagen:'img/mascaras_facial.png'},
                   {id: 34569, nombre: "MASCARA NASAL  ", marca: "RESMED", importe: 22_000, categoria: "MASCARAS", imagen:'img/mascaras_nasal.png'},
                   {id: 90126, nombre: "AIRSENSE 10 AUTOSET", marca: "RESMED", importe: 100_000, categoria: "EQUIPOS AUTOCPAP", imagen:'img/equipos_autocpap_airsense.png'},
                   {id: 90127, nombre: "DREAM STATION", marca: "PHILIPS", importe: 150_000, categoria: "EQUIPOS AUTOCPAP", imagen:'img/equipos_autocpap_dream station.png'},
                   {id: 15151, nombre: "MASCARA PILLOW  ", marca: "RESMED", importe: 25_000, categoria: "MASCARAS", imagen:'img/mascaras_pillow.png'},
                   {id: 34589, nombre: "MASCARA ORAL ", marca: "RESMED", importe: 22_000, categoria: "MASCARAS", imagen:'img/mascaras_oral.png'},
                   {id: 90006, nombre: "G3 A20", marca: "BMC", importe: 100_000, categoria: "EQUIPOS AUTOCPAP", imagen:'img/equipos_autocpap_g3 a20.png'},
                   {id: 90007, nombre: "RESPIRONICS", marca: "PHILIPS", importe: 150_000, categoria: "EQUIPOS AUTOCPAP", imagen:'img/equipos_autocpap_respironics.png'}]


const productosCategoria = [{categoria: "MASCARAS"},
                            {categoria: "EQUIPOS AUTOCPAP"},
                            {categoria: "EQUIPOS BIPAP"},
                            {categoria: "CPAP"},]
const productosMarca = [{categoria: "RESMED"},
                        {categoria: "PHILIPS"},]