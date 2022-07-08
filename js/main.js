// -------------------> Import de los productos <-------------------

import { productos } from "./data.js";

// -------------------> Funcion cambiar precio de menor a mayor <-------------------

// const sortMenorMayor = () => {
//     productosArray.sort ((a, b) => a.precio - b.precio);
//     console.log (productosArray);
//     mostrarListaOrdenada();
// }


// -------------------> Funcion cambiar precio de mayor a menor <-------------------

// const sortMayorMenor = () => {
//     productosArray.sort ((a, b) => b.precio - a.precio);
//     console.log (productosArray);
//     mostrarListaOrdenada();
// }


// -------------------> Funcion mostrar lista ordenada <-------------------

// const mostrarListaOrdenada = () => {
//     let arrayLista = [];
//     productosArray.forEach(producto => arrayLista.push(producto.nombre + " $" + producto.precio));
//     alert("Lista de precios:" + "\n" + arrayLista.join("\n"));
// }


// -------------------> Agregando dinamismo a la pagina de productos <-------------------

    const contenedorProductos = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('col-4');
    div.innerHTML += `<div>
                        <a href="${producto.redireccion}">
                            <img src="${producto.img}">
                        </a>
                        <h4>${producto.nombre}</h4>
                        <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    </div>
                    <div class="card-content">
                        <p>$${producto.precio}</p>
                    </div>
                    <button class="btn alCarrito" id="alCarrito" value="${producto.id}" >Añadir al carrito</button>`
    contenedorProductos.appendChild(div);
    })


// -------------------> Función para agregar productos al carrito <-------------------
// -------------------> Toastify boton de comprar <-------------------

contenedorProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("alCarrito")) {
        const productoId = Number(e.target.value);
        const productoAlCarrito = productos.find( (producto) => producto.id === productoId );
        renderCarrito(productoAlCarrito);
        Toastify({
            text: "Añadiste un (1) producto al carrito",
            duration: 3000,
            position: "right",
            gravity: "bottom",
            style: {
            background: "linear-gradient(to right, #ff523b, #ffcbc4)",
            }
        }).showToast();
    }
})


// Crear una función que se llame renderCarrito

const renderCarrito = (producto) => {
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const div = document.createElement('div');
    div.classList.add('cart-list');
    div.innerHTML += `<table>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                        <tr>
                            <td>
                                <div class="cart-info">
                                    <img src="${producto.img}" alt="Sin imagen" width="20%"">
                                </div>
                            <div>
                                <p>Producto: ${producto.nombre}</p>
                                <small>Precio: $${producto.precio}</small>
                                <button class="btn-eliminarProd">Eliminar producto</button>
                            </div>
                            </td>
                            <td><p class="textoCantidad">1</p></td>
                            <td>Precio: $${producto.precio}</td>
                        </tr>
                    </table>`
    contenedorCarrito.appendChild(div);
}

// -------------------> Función para eliminar del carrito <-------------------

