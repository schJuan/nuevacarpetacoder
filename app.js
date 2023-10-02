let nombreUsuario = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let entrada = prompt (`Que desa pedir ${nombreUsuario} ${apellido}
1 Burguer clasica $1000
2 Triple queso $2000
3 Musk burguer $3000`)
switch(entrada){
    case "1":
        alert("Usted pidió Burguer clasica")
        break
    case "2":
        alert("Usted pidió Triple queso")
        break
    case "3":
        alert("Usted pidió Musk Burguer")
        break
    default:
        alert("No entendi el mensaje, intente de nuevo")
        break
}
let papas = prompt(`¿Desea agregar papas por $600? responda "Si" o "No"`)
switch (papas) {
    case "Si":
        alert("Su hamburguesa va con papas")
        break
    case "No":
        alert("Su hamburguesa va huerfana (sin papas)")
        break
    default:
        alert("No entendi el mensaje, intente de nuevo")
        break
}
let pedido = (`${entrada} ${papas}`)
switch (pedido) {
    case "1 Si":
        alert(`${nombreUsuario} su pedido es de $1600`)
        break
    case "2 SI":
        alert(`${nombreUsuario} su pedido es de $2600`)
        break
    case "3 SI":
        alert(`${nombreUsuario} su pedido es de $3600`)
        break
}