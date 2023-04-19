const procesadores = [
    {
        id: 1,
        marca: 'AMD',
        modelo: 'Ryzen 9 7950X 3D-V Cache',
        img: './img/ryzen9-7950x3d.png',
        precio: 759.99,
    },
    {
        id: 2,
        marca: 'Intel',
        modelo: 'i9-13900K',
        img: './img/i9-13900k.png',
        precio: 799.99,
    },
    {
        id: 3,
        marca: 'AMD',
        modelo: 'Ryzen 9 5950X',
        img: './img/ryzen9-5950x.png',
        precio: 629.99,
    },
    {
        id: 4,
        marca: 'Intel',
        modelo: 'i9-12900K',
        img: './img/i9-12900k.png',
        precio: 599.99,
    },
];



/* // separo los productos en arrays distintos para mejor organizacion
const procesadores = [
    new Producto("AMD", "Ryzen 9 5950X", "CPU", "16/32", '', "AM4", 799.99),
    new Producto("Intel", "Core i9-11900K", "CPU", "8/16", '', "LGA 1200", 599.99),
    new Producto("AMD", "Ryzen 7 5800X", "CPU", "8/16", '', "AM4", 449.99),
    new Producto("Intel", "Core i7-11700K", "CPU", "8/16", '', "LGA 1200", 399.99),
    new Producto("AMD", "Ryzen 5 5600X", "CPU", "6/12", '', "AM4", 299.99),
];

const graficas = [
    new Producto("NVIDIA", "GeForce RTX 3090", "GPU", "24 GB GDDR6X", '', '', 1499.99),
    new Producto("AMD", "Radeon RX 6900 XT", "GPU", "16 GB GDDR6", '', '', 999.99),
    new Producto("NVIDIA", "GeForce RTX 3080", "GPU", "10 GB GDDR6X", '', '', 699.99),
    new Producto("AMD", "Radeon RX 6800 XT", "GPU", "16 GB GDDR6", '', '', 649.99),
    new Producto("NVIDIA", "GeForce RTX 3070", "GPU", "8 GB GDDR6", '', '', 499.99),
];

const mothers = [
    new Producto("ASUS", "ROG Maximus XIII Hero", "ATX", '', '', "LGA 1200", 699.99),
    new Producto("Gigabyte", "AORUS X570 Master", "ATX", '', '', "AM4", 369.99),
    new Producto("MSI", "MEG Z590 GODLIKE", "E-ATX", '', '', "LGA 1200", 1299.99),
    new Producto("ASRock", "B550M-ITX/ac", "Mini-ITX", '', '', "AM4", 159.99),
    new Producto("ASUS", "PRIME B450M-A/CSM", "Micro-ATX", '', '', "AM4", 99.99),
];

const memoriasRAM = [
    new Producto("Corsair", "Vengeance RGB Pro", "DDR4", "32GB (2x16GB)", '', '', 219.99),
    new Producto("G.Skill", "Trident Z RGB", "DDR4", "16GB (2x8GB)", '', '', 129.99),
    new Producto("Crucial", "Ballistix RGB", "DDR4", "16GB (2x8GB)", '', '', 114.99),
    new Producto("Team Group", "T-Force Delta RGB", "DDR4", "16GB (2x8GB)", '', '', 99.99),
    new Producto("Kingston", "HyperX Fury RGB", "DDR4", "16GB (2x8GB)", '', '', 89.99),
];

const almacenamiento = [
    new Producto("Crucial", "MX500", "SSD", "1TB", '', '', 109.99),
    new Producto("Samsung", "860 EVO", "SSD", "500GB", '', '', 89.99),
    new Producto("Kingston", "A2000", "M.2 NVMe", "1TB", '', '', 114.99),
    new Producto( "Western Digital", "Blue SN550", "M.2 NVMe", "500GB", '', '', 69.99),
    new Producto("Corsair", "Force MP510", "M.2 NVMe", "2TB", '', '', 399.99),
];

const fuentesAlimentacion = [
    new Producto("EVGA", "SuperNOVA 850 G+", "ATX", "850W", "80+ Gold", '', 149.99),
    new Producto("Corsair", "RM850x", "ATX", "850W", "80+ Gold", '', 139.99),
    new Producto("Seasonic", "FOCUS GX-1000", "ATX", "1000W", "80+ Gold", '', 199.99),
    new Producto("Thermaltake", "Toughpower PF1 ARGB", "ATX", "850W", "80+ Platinum", '', 209.99),
    new Producto("be quiet!", "Dark Power Pro 12", "ATX", "1500W", "80+ Titanium", '', 549.99),
];

const coolers = [
    new Producto("Corsair", "iCUE H150i Elite Capellix", "Refrigeración líquida", "360mm", '', '', 199.99),
    new Producto("Noctua", "NH-D15 chromax.black", "Refrigeración por aire", '', '', '', 99.99),
    new Producto("be quiet!", "Dark Rock Pro 4", "Refrigeración por aire", '', '', '', 89.9),
    new Producto("NZXT", "Kraken X73", "Refrigeración líquida", "360mm", '', '', 179.99),
    new Producto("Cooler Master", "Hyper 212 Black Edition", "Refrigeración por aire", '', '', '', 39.99),
];

const gabinetes = [
    new Producto("NZXT", "H510i", "Mid Tower", '', '', '', 119.99),
    new Producto("Fractal Design", "Define 7", "Full Tower", '', '', '', 179.99),
    new Producto("Corsair", "iCUE 220T RGB", "Mid Tower", '', '', '', 109.99),
    new Producto("Lian Li", "PC-O11 Dynamic", "Mid Tower", '', '', '', 149.99),
    new Producto("Phanteks", "Eclipse P400A", "Mid Tower", '', '', '', 84.99),
]; */