import { Link } from "react-router-dom"


const Item = ({id, nombre, img, precio, stck}) => {
    return ( 
        <div className="contCards">
            <div className="itemCard">
                <header>
                    <h2>{nombre}</h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} className="imgProd" />
                </picture>
                <section>
                    <p>Precio: ${precio}</p>
                </section>
                <footer>
                    <Link to={`/item/${id}`} className="btn det">Ver detalles</Link>
                </footer>
            </div>
        </div>
    )
}

export {Item}