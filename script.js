//*******************PRE-ENTREGA3***************/

//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }




//***********PRE-ENTREGA 2*************/

// alert("THE BLACK CANDLE COMPANY, WELCOME")
// const productos = [{
//         nombre: "velas en lata",
//         precio: 200
//     },
//     {
//         nombre: "velas especiales",
//         precio: 350
//     },
//     {
//         nombre: "portavelas",
//         precio: 400
//     },
// ];
// let carrito = []

// let seleccion = prompt("Hola, desea comprar algun producto? Responda si o no")

// while (seleccion != "si" && seleccion != "no") {
//     alert("por favor ingresa SI o NO")
//     seleccion = prompt("Hola, desea comprar algun producto? Responda si o no")
// }

// if (seleccion == "si") {
//     alert("A continuacion nuestra lista de productos")
//     let todoslosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
//     alert(todoslosProductos.join(" - "))
// } else if (seleccion == "no") {
//     alert("¡Gracias por pasarte por aqui, vuelve pronto!")
// }

// while (seleccion != "no") {
//     let producto = prompt("agrega un producto a tu carrito")
//     let precio = 0

//     if (producto == "velas en lata" || producto == "velas especiales" || producto == "portavelas") {
//         switch (producto) {
//             case "velas en lata":
//                 precio = 200;
//                 break;
//             case "velas especiales":
//                 precio = 350;
//                 break;
//             case "portavelas":
//                 precio = 400;
//                 break;
//         }
//         let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))
//         carrito.push({
//             producto,
//             unidades,
//             precio
//         })
//         console.log(carrito)
//     } else {
//         alert("no tenemos ese producto")
//     }

//     seleccion = prompt("Desea seguir comprando?")

//     while (seleccion == "no") {
//         alert("Gracias por al compra! Hasta pronto")
//         carrito.forEach((carritoFinal) => {
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//         break;
//     }
// }

// // creamos un acumulador para sacar la cuenta total
// const totaldeCompra = carrito.reduce((acc, e) => acc + e.precio * e.unidades, 0);
// console.log(`El total a pagar por su compra es: ${totaldeCompra}`)








//************************************************************************************************************************* */

//EJERCICIOS PARA PRACTICAR EN CLASE*******************

/*Ejercicio 1

let n1=prompt("Ingresa un numero");
let n2=1000;

if(n1>n2){
    alert("El numero ingresado es mayor a 1000")
}


//Ejercicio 2

let t1=prompt("Ingresa un texto");
let t2= "hola";

if(t1==t2){
    alert("Hola! Cómo te puedo ayudar?")
}


//Ejercicio 3
let num1=prompt("Ingresa un numero")
if((num1>=10)&& (num1<=50)){
    alert("El numero ingresado esta entre 10 y el 50")
}
else{
    alert("Ingresa un numero entre el 10 y el 50")
}
    
*/

//PRE-ENTREGA 1 SIMULADOR INTERACTIVO

// alert("Ingrese la opcion del producto que desea comprar, para salir ingrese 0")
// let tipoProducto = Number(prompt("1.VELAS LATA $200  2.VELAS ESPECIALES $350  3. PORTAVELAS $400"));
// let seleccionarCantidad;
// let total = 0;

// const cantidad = (cant, precio) => {
//     return cant * precio
// }


// while (tipoProducto != 0) {
//     switch (tipoProducto) {
//         case 1:
//             seleccionarCantidad = Number(prompt("el producto seleccionado es Vela en lata, indique la cantidad"))
//             total += cantidad(seleccionarCantidad, 200)
//             break;
//         case 2:
//             seleccionarCantidad = Number(prompt("el producto seleccionado es Vela Especial, indique la cantidad"))
//             total += cantidad(seleccionarCantidad, 350)
//             break;
//         case 3:
//             seleccionarCantidad = Number(prompt("el producto seleccionado son Portavelas, indique la cantidad"))
//             total += cantidad(seleccionarCantidad, 400)
//             break;

//         default:
//             break;

//     }

//     tipoProducto = Number(prompt("1-VELAS LATA $200 2- VELAS ESPECIALES $350 3. PORTAVELAS $400"));

// }

// alert("el total de la compra es de: " + total)


// const envio = () => {
//     if (total >= 600) {
//         alert("El envio es gratuito")
//     } else {
//         total += 150
//         alert("El costo del envio es de $150, el total es: " + total)
//     }
// }

// envio();

// // Pago con tarjeta es + 10% de comision del pago total

// const metodoDePago = () => {
//     let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
//     if (metodo == "tarjeta") {
//         total = (total / 10) + total
//         alert("el total es: " + total)
//     } else if (metodo == "efectivo") {
//         total -= 100
//         alert("tienes un descuento de $100, el total es: " + total)
//     }

// }

// metodoDePago();