function consultarTatuaje() {
    let respuesta = confirm("¿Queres hacerte un tatuaje?")
    if (respuesta) {
        mostrarTamaños()
        mostrarTipo()
        mostrarTurnos()
    } else {
        console.warn("Piensa en el tatuaje y vuelve !!. Gracias")
    }
}

function mostrarTamaños() {
    let medida = prompt("Selecciona el tamaño del tatuaje: Pequeño/Mediano/Grande:")
    console.log(medida)
    switch (medida.toLowerCase())
    {
        case "pequeño":
            alert("Su precio es $ 5000.")
            break;
        case "mediano":
            alert("Su precio es $ 10000.")
            break;
        case "grande":
            alert("Su precio es $ 20000.")
            break;  
        default:
            console.warn("No entendimos tu eleccion. Vuelve a intentar")
        break;
    } 
}
function mostrarTipo() {
    let tipo = prompt("Selecciona el tipo del tatuaje: Realismo/Oldschool/Newschool/Anime:")
    console.log(tipo)
    switch (tipo.toLowerCase())
    {
        case "realismo":
            alert("Su precio es $ 5000.")
            break;
        case "oldschool":
            alert("Su precio es $ 10000.")
            break;
        case "newschool":
            alert("Su precio es $ 20000.")
            break;
        case "anime":
            alert("Su precio es $ 5000.")
            break;
        default:
            console.warn("No entendimos tu eleccion. Vuelve a intentar")
        break;
    }
}
function mostrarTurnos() {
    for (let i = 0; i <= 5; i++ ){
        let ingesarNombre = prompt("Ingresa nombre y apellido")
        console.log("Turno asignado N° " + (i + 1) + " a cliente :" + ingesarNombre )
    }
}