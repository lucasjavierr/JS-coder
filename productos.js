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
        id: '4090-asus-rog',
        titulo: 'Asus ROG Strix Geforce RTX 4090',
        imagen: './img/graficas/4090-asus-rog.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '7900xtx-asus-tuf',
        titulo: 'Asus Radeon RX 7900XTX TUF Gaming',
        imagen: './img/graficas/7900xtx-asus-tuf.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '4090-aorus',
        titulo: 'Gigabyte Geforce RTX 4090 Aorus',
        imagen: './img/graficas/4090-aorus.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '7900xtx-aorus',
        titulo: 'Radeon RX 7900XTX Aorus Elite',
        imagen: './img/graficas/7900xtx-aorus.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '4090-msi-gxt',
        titulo: 'Geforce RTX 4090 MSI Gaming X Trio',
        imagen: './img/graficas/4090-msi-gxt.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '7900xtx-asrock-phantom',
        titulo: 'Radeon RX 7900XTX Asrock Phantom',
        imagen: './img/graficas/7900xtx-asrock-phantom.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '4080-asus-tuf',
        titulo: 'Geforce RTX 4080 Asus TUF',
        imagen: './img/graficas/4080-asus-tuf.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '7900xt-msi-gtc',
        titulo: 'Radeon RX 7900XT MSI Gaming Trio Classic',
        imagen: './img/graficas/7900xt-msi-gtc.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '4080-gigabyte',
        titulo: 'Geforce RTX 4080 Gigabyte',
        imagen: './img/graficas/4080-gigabyte.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '7900xt-gigabyte',
        titulo: 'Radeon RX 7900XT Gigabyte',
        imagen: './img/graficas/7900xt-gigabyte.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3090ti-asus-rog',
        titulo: 'Geforce RTX 3090 Ti Asus ROG',
        imagen: './img/graficas/3090ti-asus-rog.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6950xt-msi-gxt',
        titulo: 'Radeon RX 6950XT MSI Gaming X Trio',
        imagen: './img/graficas/6950xt-msi-gxt.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3090-msi-ventus3x',
        titulo: 'Geforce RTX 3090 MSI Ventus 3X',
        imagen: './img/graficas/3090-msi-ventus3x.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6900xt-powercolor',
        titulo: 'Radeon RX 6900XT MSI Powercolor Red Devil',
        imagen: './img/graficas/6900xt-powercolor-reddevil.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3080ti-msi-suprimx',
        titulo: 'Geforce RTX 3080 Ti MSI Suprim X',
        imagen: './img/graficas/3080ti-msi-suprimx.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6850xt-asus-tuf',
        titulo: 'Radeon RX 6850XT Asus TUF',
        imagen: './img/graficas/6850xt-asus-tuf.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3080-asus-tuf',
        titulo: 'Geforce RTX 3080 Asus TUF',
        imagen: './img/graficas/3080-asus-tuf.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6800xt-gigabyte',
        titulo: 'Radeon RX 6800XT Gigabyte',
        imagen: './img/graficas/6800xt-gigabyte.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3070ti-gigabyte',
        titulo: 'Geforce RTX 3070 Ti Gigabyte',
        imagen: './img/graficas/3070ti-gigabyte.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6750xt-asrock-phantom',
        titulo: 'Radeon RX 6750XT Asrock Phantom',
        imagen: './img/graficas/6750xt-asrock-phantom.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3070-msi-gzt',
        titulo: 'Geforce RTX 3070 MSI Gaming Z Trio',
        imagen: './img/graficas/3070-msi-gzt.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6700xt-aorus',
        titulo: 'Radeon RX 6700XT Aorus Elite',
        imagen: './img/graficas/6700xt-aorus.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3060ti-aorus',
        titulo: 'Geforce RTX 3060 Ti Aorus Master',
        imagen: './img/graficas/3060ti-aorus.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6650xt-powercolor-reddevil',
        titulo: 'Radeon RX 6650XT Powercolor Red Devil',
        imagen: './img/graficas/6650xt-powercolor-reddevil.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3060-zotac',
        titulo: 'Geforce RTX 3060 Zotac Gaming',
        imagen: './img/graficas/3060-zotac.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6600xt-asus-rog',
        titulo: 'Radeon RX 6600XT Asus ROG',
        imagen: './img/graficas/6600xt-asus-rog.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '3050-evga',
        titulo: 'Geforce RTX 3050 EVGA XC',
        imagen: './img/graficas/3050-evga.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: '6500xt-msi-mech-2x',
        titulo: 'Radeon RX 6500XT MSi Mech 2X',
        imagen: './img/graficas/6500xt-msi-mech2x.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: 'arc-a770',
        titulo: 'Intel Arc A770',
        imagen: './img/graficas/a770-intel.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },
    {
        id: 'arc-a750',
        titulo: 'Intel Arc A750',
        imagen: './img/graficas/a750-intel.png',
        categoria: {
            nombre: 'Tarjetas Gráficas',
            id: 'graficas',
        },
        precio: 2499.99,
    },



    // ---------------- MOTHERBOARDS ----------------
    {
        id: 'z790-aorus-elite',
        titulo: 'Z790 Aorus Elite AX',
        imagen: './img/motherboards/z790-aorus-elite.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'x670e-rog-che',
        titulo: 'Asus ROG Crosshire X670E Extreme',
        imagen: './img/motherboards/x670e-rog-che.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'z690-asrock-taichi',
        titulo: 'Z690 Asrock Taichi',
        imagen: './img/motherboards/z690-asrock-taichi.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'x570-aorus-elite',
        titulo: 'X570 Aorus Elite',
        imagen: './img/motherboards/x570-aorus-elite.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'b760m-gigabyte-gx',
        titulo: 'B760M Gigabyte Gaming X',
        imagen: './img/motherboards/b760m-gigabyte-gx.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'b650mds3h-gigabyte-ud',
        titulo: 'B650M-DS3H Gigabyte UD',
        imagen: './img/motherboards/b650mds3h-gigabyte-ud.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'b660m-msi-mag-mortar',
        titulo: 'B660M MSI MAG Mortar',
        imagen: './img/motherboards/b660m-msi-mag-mortar.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'b550m-aorus-elite',
        titulo: 'B550M Aorus Elite',
        imagen: './img/motherboards/b550m-aorus-elite.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'h610me-d4-asus-prime',
        titulo: 'H610M-E D4 Asus Prime',
        imagen: './img/motherboards/h610me-d4-asus-prime.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'a520m-aii-asus-prime',
        titulo: 'A520M-A II Asus Prime',
        imagen: './img/motherboards/a520m-aii-asus-prime.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'h510m-s2h-gigabyte',
        titulo: 'H510M S2H Gigabyte UD',
        imagen: './img/motherboards/h510m-s2h-gigabyte.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
    {
        id: 'a320mh-gigabyte',
        titulo: 'A320M-H Gigabyte UD',
        imagen: './img/motherboards/a320mh-gigabyte.png',
        categoria: {
            nombre: 'Motherboards',
            id: 'motherboards',
        },
        precio: 2499.99,
    },
];

