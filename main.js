const contenedorProductos = document.getElementById('contenedor-productos');
const botonesCategorias = document.querySelectorAll('.categoria');
const tituloPrincipal = document.getElementById('titulo-principal');
let botonesAgregar = document.getElementsByClassName('producto-agregar');
const numerito = document.getElementById('numerito');

const carrito = [];

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML='';
    productosElegidos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML+=`
            <img src="${producto.imagen}" class="producto-img" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id='${producto.id}'>Agregar al carrito</button>
            </div>
        `;
        contenedorProductos.append(div);
    })

    updateAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id != 'todos') {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = 'Todos los productos';
            cargarProductos(productos);
        }
    });
});

function updateAgregar() {
    botonesAgregar = document.getElementsByClassName('producto-agregar');
    Array.from(botonesAgregar).forEach(boton => {
        boton.addEventListener('click', (e) => {
            agregarCarrito(e)
        });
    });
};


function agregarCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(carrito.some(producto => producto.id === idBoton)) {
        const index = carrito.findIndex(producto => producto.id === idBoton);
        carrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        carrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem('producos-en-carrito', JSON.stringify(carrito));
}

function actualizarNumerito() {
    let numeritoUpdate = carrito.reduce((ac, producto) => ac + producto.cantidad, 0);
    numerito.innerText=numeritoUpdate;
}