/*let nombreUsuario = prompt ("Ingrese su nombre")

let apellido = prompt ("Ingrese su apellido")
let hamburguesa1 = "Burguer clasica" 
let hamburguesa2 = "Triple queso"
let hamburguesa3 = "Musk burguer"

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

papas = prompt(`¿Desea agregar papas por $600? responda "Si" o "No"`)

while (papas != "Si" && papas != "No"){
    papas = prompt(`¿Desea agregar papas por $600? responda "Si" o "No"`)
}
let pedido = (`${entrada} ${papas}`)

switch (pedido) {
    case "1 Si":
        alert(`${nombreUsuario} su pedido es de ${hamburguesa1} mas papas su costo es $1600`)
        break
    case "2 Si":
        alert(`${nombreUsuario} su pedido es de ${hamburguesa2} mas papas su costo es $2600`)
        break
    case "3 Si":
        alert(`${nombreUsuario} su pedido es de ${hamburguesa3} mas papas su costo es $3600`)
        break
}
*/
//[]
/*const carrito = []
carrito.push("primer producto")
carrito.push("segundo producto")
console.log (carrito)*/
 //unshift agregar elementos al comienzo del array
/*const arreglo = ["primero", 2, false]
arreglo.unshift ("otro elemento")
console.log(arrego)*/
/*function sumar (a, b){
    return a + b
}
function sumar(a, b) {
    return a + b
}
function restar(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b
}
function dividir(a, b) {
    return a / b
}
console.log(multiplicar(2, 3))*/
//CALLBACKS ( FUNCIONESCOMOPARAMETROS DE OTRAS FUNCIONES)
let entrada = prompt (`Ingrese su nombre`) 
function saludar(entrada, callback){
    alert("saludos" + entrada + "!")
    callback()
 }
 function despedir() {
    alert (`Hasta luego ${entrada}`)
 }
 saludar (`${entrada}`, despedir)