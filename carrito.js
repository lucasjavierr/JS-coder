let prodsEnCarrito = localStorage.getItem('productos-en-carrito');
prodsEnCarrito = JSON.parse(prodsEnCarrito);

const contenedorCarritoVacio = document.getElementById('carrito-vacio');
const contenedorCarritoProductos = document.getElementById('carrito-productos');
const contenedorCarritoAcciones = document.getElementById('carrito-acciones');
const contenedorCarritoComprado = document.getElementById('carrito-comprado');
const botonesEliminar = document.getElementById('carrito-eliminar');

function cargarProductosCarrito() {
    if (prodsEnCarrito && prodsEnCarrito.length > 0) {
    
        if (contenedorCarritoVacio) {
            contenedorCarritoVacio.classList.add('disabled');
        }
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
    
    } else {
        if (contenedorCarritoVacio) {
            contenedorCarritoVacio.classList.remove('disabled');
        }
        contenedorCarritoProductos.classList.add('disabled');
        contenedorCarritoAcciones.classList.add('disabled');
        contenedorCarritoComprado.classList.add('disabled');
    }
}

cargarProductosCarrito();

/* 
function updateEliminar() {
    botonesEliminar = document.getElementsByClassName('producto-eliminar');
    Array.from(botonesAgregar).forEach(boton => {
        boton.addEventListener('click', agregarCarrito)
    });
} */

// 1:58:48