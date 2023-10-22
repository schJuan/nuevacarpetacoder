
/*//COMIENZO DE ENTREGA
const hamburguesa1 = {
    nombre: "Burguer clasica",
    precio: 1000
}
const hamburguesa2 = {
    nombre: "triple queso",
    precio: 2000
}
const hamburguesa3 = {
    nombre: "Musk burguer",
    precio: 3000
}
const papas1 = {
    nombre: "papas clasicas",
    precio: 1000
}
const papas2 = {
    nombre: "papas explosiva",
    precio: 2000
}
const papas3 = {
    nombre: "papas con chedar",
    precio: 3000
}

let nombreUsuario = prompt("Ingrese su nombre")

let apellido = prompt("Ingrese su apellido")

let entrada = prompt(`Que desa pedir ${nombreUsuario} ${apellido}
1 Burguer clasica $1000
2 Triple queso $2000
3 Musk burguer $3000`)

const carrito = [
]

switch (entrada) {
    case "1":
        carrito.push(hamburguesa1)
        break
    case "2":
        carrito.push(hamburguesa2)
        break
    case "3":
        carrito.push(hamburguesa3)
        break
}
papas = prompt(`Que desa pedir ${nombreUsuario} ${apellido}
        1 papas clasicas $1000
        2 papas explosivas $2000
        3 papas con chedar $3000
        "No" para no pedir papas`)

while (papas != "1" && papas != "2" && papas != "3" && papas != "No") {
    papas = prompt(`Que desa pedir ${nombreUsuario} ${apellido}
        1 papas clasicas $1000
        2 papas explosivas $2000
        3 papas con chedar $3000
        "No" para no pedir papas`)
}

switch(papas){
    case "1":
        carrito.push(papas1)
        break
    case "2":
        carrito.push(papas2)
        break
    case "3":
        carrito.push(papas3) 
       break  
    case "No":
}
let quitarPedido = prompt (`Que deseas sacar ${nombreUsuario}   
    1 hamburguesa
    2 papas
    3 confirmar pedido`)
switch(quitarPedido){
    case "1":
        carrito.shift()
        break
    case "2":
        carrito.pop()
        break
    case "3":
        break
}


let resultado = carrito.reduce((accum, p) =>{
    return accum + p.precio
}, 0)
alert(`${nombreUsuario}` + " su compra es de: " + resultado)


//FIN DE ENTREGA*/
/*let documento
documento = document
console.log(documento)*/
/*const navbar = document.getElementsByClassName("tarjeta")
console.log(navbar)*/
const titulo = document.querySelector("h1").textContent = "Nuevo titulo prueba"
