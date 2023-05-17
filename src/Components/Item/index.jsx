

const Item = ({id, nombre, img, precio, stck}) => {
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
                </section>
                <footer>
                    <button className="btn det">Ver detalles</button>
                </footer>
            </div>
        </div>
    )
}

export {Item}