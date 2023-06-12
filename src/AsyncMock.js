import Accesorios1 from './assets/Accesorios1.jpeg'
import Accesorios2 from './assets/Accesorios2.jpeg'
import Accesorios3 from './assets/Accesorios3.jpeg'
import Accesorios4 from './assets/Accesorios4.jpeg'
import Accesorios5 from './assets/Accesorios5.jpeg'



const products = [
    {
        nombre: 'Bermuda cargo',
        precio: 6500,
        id: 1,
        stck: 8,
        categoria: 'hombre',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://ritualsbrand.com.ar/wp-content/uploads/2023/01/PhotoRoom_20221229_200220-e1674666280711-300x300.png'
    },
    {
        nombre: 'Bermuda cargo negra',
        precio: 6200,
        id: 2,
        stck: 5,
        categoria: 'hombre',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/131/845/products/trap-cargo-short1-41046d021716a2079d16724463477616-240-0.webp'
    },
    {
        nombre: 'Bermuda cargo gris',
        precio: 5999,
        id: 3,
        stck: 6,
        categoria: 'hombre',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/13955104.png'
    },
    {
        nombre: 'Pantalon cargo negro',
        precio: 6800,
        id: 4,
        stck: 10,
        categoria: 'hombre',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/131/845/products/negro-delantero-tag1-a0a6bb7c09024d608e16678360980650-480-0.png'
    },
    {
        nombre: 'Pantalon cargo veige',
        precio: 2100,
        id: 5,
        stck: 4,
        categoria: 'hombre',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/369/168/products/992ed5_92d31a6b17ad4437b8913e9aa4fe8fd5_mv21-297e5b7bf7aef9419c16624739173337-640-0.png'
    },
    {
        nombre: 'Remera blanca MIB',
        precio: 2100,
        id: 6,
        stck: 3,
        categoria: 'hombre',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/070/999/products/hombres-de-negro-1-clara-horizontal1515151-928cce89a1163e383c16225780161193-1024-10241-06c1653614842e3edc16569505112334-1024-1024.png'
    },
    {
        nombre: 'Remera monkeys',
        precio: 2400,
        id: 7,
        stck: 2,
        categoria: 'hombre',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/819/313/products/463rb1-9e162406bb1279d7cb16515976225552-640-0.png'
    },
    {
        nombre: 'Remera bantard blanca',
        precio: 4050,
        id: 8,
        stck: 7,
        categoria: 'mujer',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/821/674/products/pleasure-roja41-ebc6d577e4a0740eaf16836518306810-480-0.webp'
    },
    {
        nombre: 'Remera bantard negra',
        precio: 4050,
        id: 8,
        stck: 7,
        categoria: 'mujer',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/821/674/products/hell1-b1e34386aa741fb50e16826207865801-480-0.webp'
    },
    {
        nombre: 'Remera overcize blanca',
        precio: 3900,
        id: 9,
        stck: 8,
        categoria: 'mujer',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/821/674/products/sinner-41-9eff76800d060c2d7616795026464743-240-0.webp'
    },
    {
        nombre: 'Top brilloso blanco',
        precio: 4500,
        id: 10,
        stock: 9,
        categoria: 'mujer',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/278/443/products/d_nq_np_2x_725979-mla52044378550_102022-f-removebg-preview1-5c460f05b3e906ca1f16662792757405-240-0.png'
    },
    {
        nombre: 'Top basico negro',
        precio: 5500,
        id: 11,
        stck: 2,
        categoria: 'mujer',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://aeropostale.vteximg.com.br/arquivos/ids/160450-640-740/10996249-8011.png?v=638152861188270000'
    },
    {
        nombre: 'Top dos tiras rojo',
        precio: 4900,
        id: 12,
        stck: 3,
        categoria: 'mujer',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/278/443/products/d_nq_np_2x_995529-mla52027620348_102022-f-removebg-preview1-123c480de8c706500616662068208523-240-0.png'
    },
    {
        nombre: 'Top negro',
        precio: 4900,
        id: 13,
        stck: 2,
        categoria: 'mujer',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/278/443/products/d_nq_np_2x_942479-mla52044366635_102022-f-removebg-preview1-e8d4473c86e1dfc63416662792755253-240-0.png',
    },
    {
        nombre: 'Pulsera con dije',
        precio: 1500,
        id: 14,
        stck: 4,
        categoria: 'accesorios',
        talles: 'xs, s, m, xl, xxl',
        img: Accesorios1
    },  
    {
        nombre: 'Aritos de oro x3',
        precio: 1700,
        id: 15,
        stck: 2,
        categoria: 'accesorios',
        talles: 'xs, s, m, xl, xxl',
        img: Accesorios2
    },
    {
        nombre: 'Pulsera de hilo con dije',
        precio: 900,
        id: 16,
        stck: 1,
        categoria: 'accesorios',
        talles: 'xs, s, m, xl, xxl',
        img: Accesorios3
    },
    {
        nombre: 'Collar dorado con dije',
        precio: 1600,
        id: 17,
        stck: 7,
        categoria: 'accesorios',
        talles: 'xs, s, m, xl, xxl',
        img: Accesorios4
    },
    {
        nombre: 'Aritos de oro 2x1',
        precio: 1200,
        id: 18,
        stck: 8,
        categoria: 'accesorios',
        talles: 'xs, s, m, xl, xxl',
        img: Accesorios5
    },
    {
        nombre: 'Riñonera verde hombre',
        precio: 3100,
        id: 19,
        stck: 2,
        categoria: 'accesorios',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://cdn.shopify.com/s/files/1/0018/9225/3766/products/high-coast-hip-pack-100-recycled-nylon-bags-fjallraven-green-404636_550x.png?v=1684458085'
    },
    {
        nombre: 'Riñonera negra hombre',
        precio: 3500,
        id: 20,
        stck: 5,
        categoria: 'accesorios',
        talles: 'xs, s, m, xl, xxl',
        img: 'https://cdn.shopify.com/s/files/1/0568/6542/3539/files/C3026-000-view4_1000x.png?v=1684493260'
    }
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)   
        }, 500)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 500)
    })
}