const prodsEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito'));

const contenedorCarritoVacio = document.getElementById('carrito-vacio');
const contenedorCarritoProductos = document.getElementById('carrito-productos');
const contenedorCarritoAcciones = document.getElementById('carrito-acciones');
const contenedorCarritoComprado = document.getElementById('carrito-comprado');

if (carrito) {
    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.remove('disabled');
    contenedorCarritoAcciones.classList.remove('disabled');
    contenedorCarritoComprado.classList.add('disabled');

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('carrito-producto');
        div.innerHTML=`
            <div class="carrito-producto">
                <img class="carrito-img" src="./img/ryzen9-7950x3d.png" alt="">
                <div class="carrito-titulo">
                    <small</small>
                    <h3>IntelAMD</h3>
                </div>
                <div class="carrito-cantidad">
                    <small>Cantidad</small>
                    <p>2</p>
                </div>
                <div class="carrito-precio">
                    <small>Precio</small>
                    <p>1000</p>
                </div>
                <div class="carrito-subtotal">
                    <small>Subtotal</small>
                    <p>200</p>
                </div>
                <button class="carrito-eliminar"><i class="fa-solid fa-trash"></i></button>
            </div>`;
    })
} else {

}