
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





let resultado = carrito.reduce((accum, p) =>{
    return accum + p.precio
}, 0)*/

const containerCartProducts = document.querySelector(
    '.tarjeta'
)
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-card');
});
const productsList = document.querySelector(`.inicio`)
let carrito = []
const valorTotal = document.querySelector(`.total-pagar`)
const boton = document.querySelector(".boton")

const cartTotal = document.querySelector('.cart-total');
const countProducts = document.querySelector('#contador-productos')

productsList.addEventListener("click",e => {
    if(e.target.classList.contains(boton)){
        const product = e.target.parenElement
        const infoProdct = {
            quantity: 1,
            title: product.querySelector(`h2`).textContent,
            price: product.querySelector(`p`).textContent
        }

        const exits = carrito.some(
            product => product.title === infoProdct.title
        )

        if (exits){
            const product = carrito.map(product =>{
                if (product.title === infoProdct.title){
                    product.quantity++;
                    return product
                }else{
                    return product
                }
            })
            allProducts = [...product]
        }else{
            carrito = [...carrito. infoProdct]
        }
        showHTML()
    }
})

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains(".icon-close")) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        carrito = carrito.filter(
            product => product.title !== title
        );

        console.log(carrito);

        showHTML();
    }
});
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }
    rowProduct.innerHTML = ''
    let total = 0;
    let totalOfProducts = 0
    carrito.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="tarjeta">
                <span >${product.quantity}</span>
                <p>${product.title}</p>
                <span>${product.price}</span>
            </div>
        `;

        rowProduct.append(containerProduct);

        total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
}
ocument.addEventListener('DOMContentLoaded', () => {
    carrito = [];
    showHTML();

    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
        carrito = storedProducts;
        showHTML();
    }
});
//FIN DE ENTREGA*/