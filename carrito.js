let prodsEnCarrito = localStorage.getItem('productos-en-carrito');
prodsEnCarrito = JSON.parse(prodsEnCarrito);

const contenedorCarritoVacio = document.getElementById('carrito-vacio');
const contenedorCarritoProductos = document.getElementById('carrito-productos');
const contenedorCarritoAcciones = document.getElementById('carrito-acciones');
const contenedorCarritoComprado = document.getElementById('carrito-comprado');
let c = document.getElementsByClassName('carrito-eliminar');
let botonesEliminar = Array.from(c);
const botonVaciar = document.getElementById('carrito-vaciar');
const botonTotal = document.getElementById('total');
const botonComprar = document.getElementById('carrito-comprar');

function cargarProductosCarrito() {
    if (prodsEnCarrito && prodsEnCarrito.length > 0) {
    
        contenedorCarritoVacio.classList.add('disabled');
        contenedorCarritoProductos.classList.remove('disabled');
        contenedorCarritoAcciones.classList.remove('disabled');
        contenedorCarritoComprado.classList.add('disabled');
    
        contenedorCarritoProductos.innerHTML = '';
    
        prodsEnCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('carrito-producto');
            div.innerHTML=`
                <img class="carrito-img" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-eliminar" id='${producto.id}'><i class="fa-solid fa-trash"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    } 
    else {
        contenedorCarritoVacio.classList.remove('disabled');
        contenedorCarritoProductos.classList.add('disabled');
        contenedorCarritoAcciones.classList.add('disabled');
        contenedorCarritoComprado.classList.add('disabled');
    }

    updateEliminar();
    updateTotal();
}

cargarProductosCarrito();

botonVaciar.addEventListener('click', vaciarCarrito);
botonComprar.addEventListener('click', comprarCarrito);


function updateEliminar() {
    botonesEliminar = document.getElementsByClassName('carrito-eliminar');
    Array.from(botonesEliminar).forEach(boton => {
        boton.addEventListener('click', eliminarCarrito);
    });
}

function eliminarCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = prodsEnCarrito.findIndex(producto => producto.id === idBoton);

    prodsEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(prodsEnCarrito));
}

function vaciarCarrito() {
    prodsEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(prodsEnCarrito));
    cargarProductosCarrito();
}

function updateTotal() {
    const totalCalculado = prodsEnCarrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
    botonTotal.innerText = `$${totalCalculado}`;
}

function comprarCarrito() {
    prodsEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(prodsEnCarrito));
    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.add('disabled');
    contenedorCarritoAcciones.classList.add('disabled');
    contenedorCarritoComprado.classList.remove('disabled');
}