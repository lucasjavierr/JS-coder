const productos = [
    // ---------------- PROCESADORES ----------------
    {
        id: 'ryzen9-7950x3d',
        titulo: 'AMD Ryzen 9 7950X 3D-V Cache',
        imagen: './img/procesadores/ryzen9-7950x3d.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'i9-13900k',
        titulo: 'Intel Core i9-13900K',
        imagen: './img/procesadores/i9-13900k.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen9-7950x',
        titulo: 'AMD Ryzen 9 7950X',
        imagen: './img/procesadores/ryzen9-7950x.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i9-13900kf',
        titulo: 'Intel Core i9-13900KF',
        imagen: './img/procesadores/i9-13900kf.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen9-7900x',
        titulo: 'AMD Ryzen 9 7900X',
        imagen: './img/procesadores/ryzen9-7900x.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i9-13900f',
        titulo: 'Intel Core i9-13900F',
        imagen: './img/procesadores/i9-13900f.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen9-5950x',
        titulo: 'AMD Ryzen 9 5950X',
        imagen: './img/procesadores/ryzen9-5950x.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i9-12900k',
        titulo: 'Intel Core i9-12900K',
        imagen: './img/procesadores/i9-12900k.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen9-5900x',
        titulo: 'AMD Ryzen 9 5900X',
        imagen: './img/procesadores/ryzen9-5900x.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i9-12900kf',
        titulo: 'Intel Core i9-12900KF',
        imagen: './img/procesadores/i9-12900kf.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen7-7700x',
        titulo: 'AMD Ryzen 7 7700X',
        imagen: './img/procesadores/ryzen7-7700x.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i9-12900f',
        titulo: 'Intel Core i9-12900F',
        imagen: './img/procesadores/i9-12900f.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen7-5800x3d',
        titulo: 'AMD Ryzen 7 5800X 3D-V Cache',
        imagen: './img/procesadores/ryzen7-5800x3d.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i7-13700K',
        titulo: 'Intel Core i7-13700K',
        imagen: './img/procesadores/i7-13700k.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen7-5700x',
        titulo: 'AMD Ryzen 7 5700X',
        imagen: './img/procesadores/ryzen7-5700x.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i7-12700K',
        titulo: 'Intel Core i7-12700K',
        imagen: './img/procesadores/i7-12700k.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen5-7600x',
        titulo: 'AMD Ryzen 5 7600X',
        imagen: './img/procesadores/ryzen5-7600x.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i5-13600K',
        titulo: 'Intel Core i5-13600K',
        imagen: './img/procesadores/i5-13600k.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },
    {
        id: 'ryzen5-5600x',
        titulo: 'AMD Ryzen 5 5600X',
        imagen: './img/procesadores/ryzen5-5600x.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 649.99
    },
    {
        id: 'i5-12600K',
        titulo: 'Intel Core i5-12600K',
        imagen: './img/procesadores/i5-12600k.png',
        categoria: {
            nombre: 'Procesadores',
            id: 'procesadores',
        },
        precio: 799.99
    },



    // ---------------- TARJETAS GRAFICAS ----------------
    {
        id: 'rog-rtx4090',
        titulo: 'Asus Geforce RTX 4090 ROG',
        imagen: './img/graficas/4090-asus-rog.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: 'aorus-rtx4090',
        titulo: 'Aorus Geforce RTX 4090 Master',
        imagen: './img/graficas/4090-aorus.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: 'msi-gxt-rtx4090',
        titulo: 'MSI Geforce RTX 4090 Gaming X Trio',
        imagen: './img/graficas/4090-gamingtrio.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '7900xtx-asus-tuf',
        titulo: 'Asus Radeon RX 7900XTX TUF',
        imagen: './img/graficas/7900xtx-asus-tuf.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    /* {
        id: 'intel-arca770',
        titulo: 'Intel ARC A770',
        imagen: './img/graficas/a770-intel.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    }, */
];

