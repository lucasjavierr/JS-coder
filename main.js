const carrito = [];
let contenedor = document.getElementById('misprods');

function renderizarProductos() {
    for (const prod of procesadores) {
        contenedor.innerHTML += `
            <div class="card col-sm-6">
                <img src="${prod.img}" class="card-img-top" style="max-width:150px; height:150px">
                <div class="card-body">
                    <h5 class="card-title">${prod.marca} ${prod.modelo}</h5>
                    <p class="card-text">$${prod.precio}</p>
                    <button id="btn${prod.id}" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        `;
    }

    // EVENTOS
    procesadores.forEach((prod) => {
        document.getElementById(`btn${prod.id}`).addEventListener('click', ()=>{
            agregarCarrito(prod);
        });
    });
};

renderizarProductos();

function agregarCarrito(producto) {
    carrito.push(producto);
    console.table(carrito);
    // alert(`Agregaste "${producto.marca} ${producto.modelo}" al carrito`);
    Swal.fire({
        title: 'Agregado!!',
        text: `Agregaste "${producto.marca} ${producto.modelo}" al carrito`,
        imageUrl: `${producto.img}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: `${producto.marca} ${producto.modelo}`,
    })

    // agregar fila a la tabla
    document.getElementById('tablaBody').innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.marca} ${producto.modelo}</td>
            <td>${producto.precio}</td>
        </tr>
    `;

    // incrementar el total
    let total = carrito.reduce((ac, producto) => ac + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar: '+ total;
}

