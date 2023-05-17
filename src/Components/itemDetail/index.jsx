import { ItemCount } from "../itemCount"


const ItemDetail = ({id, nombre, img, precio, stck, talles}) => {
    return ( 
        <div className="contCards">
                <div className="itemCard">
                <header>
                    <h2>{nombre}</h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} />
                </picture>
                <section>
                    <p>Precio: ${precio}</p>
                    <p>Stock disponible: {stck}</p>
                    <p>Talles en stock: {talles}</p>
                </section>
                <footer>
                    <ItemCount initial={0} stock={stck} onAdd={(quantity) => console.log('Cantida agregada', quantity)}/>
                </footer>
            </div>
        </div>
    )
}

export {ItemDetail}