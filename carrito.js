let prodsEnCarrito = localStorage.getItem('productos-en-carrito');
prodsEnCarrito = JSON.parse(prodsEnCarrito);

const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');
let botonesEliminar = document.querySelectorAll('.carrito-eliminar');
const botonVaciar = document.querySelector('#carrito-vaciar');
const botonTotal = document.querySelector('#total');
const botonComprar = document.querySelector('#carrito-comprar');

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
    botonesEliminar = document.querySelectorAll('.carrito-eliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarCarrito);
    });
}

function eliminarCarrito(e) {

    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #405808, #91c612)",
            borderRadius: "2rem"
        },
        offset: {
            x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "1.5rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const index = prodsEnCarrito.findIndex(producto => producto.id === idBoton);

    prodsEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(prodsEnCarrito));
}

function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se borrarán ${prodsEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0)}  productos del carrito`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            prodsEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(prodsEnCarrito));
        cargarProductosCarrito();
        }
    })
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