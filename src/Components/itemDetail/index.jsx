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
                <ItemCount initial={0} stock={stck} onAdd={(quantity) => (quantity)} />
            </div>
        </div>
    )
}

export {ItemDetail}