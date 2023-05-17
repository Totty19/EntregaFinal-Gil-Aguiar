const products = [
    {
        nombre: 'Bermuda cargo',
        precio: 6500,
        id: 1,
        stck: 8,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/bermudaCarg.png'
    },
    {
        nombre: 'Bermuda cargo gris',
        precio: 6200,
        id: 2,
        stck: 5,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/bermudaCargGris.png'
    },
    {
        nombre: 'Bermuda cargo veige',
        precio: 5999,
        id: 3,
        stck: 6,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/bermudaCargVg.png'
    },
    {
        nombre: 'Pantalon cargo veige',
        precio: 6800,
        id: 4,
        stck: 10,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/pantalonCargV.png'
    },
    {
        nombre: 'Remera drew ',
        precio: 2100,
        id: 5,
        stck: 4,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/remeraBlanc.png'
    },
    {
        nombre: 'Remera blanca men',
        precio: 2400,
        id: 6,
        stck: 3,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/remeraBlanMen.png'
    },
    {
        nombre: 'Remera gris',
        precio: 2100,
        id: 7,
        stck: 2,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/remeraGris.png'
    },
    {
        nombre: 'Jean',
        precio: 4050,
        id: 8,
        stck: 7,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/pantalonJean.png'
    },
    {
        nombre: 'Jean gris',
        precio: 3900,
        id: 9,
        stck: 8,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/pantalonJeanG.png'
    },
    {
        nombre: 'Pantalon Cargo',
        precio: 4500,
        id: 10,
        stock: 9,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/pantalonCarg.png'
    },
    {
        nombre: 'Campera rompe vientos blanca',
        precio: 5500,
        id: 11,
        stck: 2,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/rompeVientosBlc.png'
    },
    {
        nombre: 'Campera rompe vientos negra',
        precio: 4900,
        id: 12,
        stck: 2,
        talles: 'xs, s, m, xl, xxl',
        img: '../img/imgprod/rompeVientosNeg.png'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)   
        }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}