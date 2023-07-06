import { useContext, useState } from "react"
import { ItemCount } from "../itemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";


const ItemDetail = ({id, categoria, nombre, img, precio, stck, talles}) => {
    const [ quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, img
        }

        addItem(item, quantity)
    } 

    const showTalles = categoria !== "accesorios";

    return ( 
        <div className="contCards">
            <div className="itemCard">
                <header>
                    <h2>{nombre}</h2>
                </header>
                <picture className="imgPadr">
                    <img src={img} alt={nombre} className="imgProd" />
                </picture>
                <section>
                    <p>Precio: ${precio}</p>
                    <p>Stock disponible: {stck}</p>
                    {showTalles && <p>Talles en stock: {talles}</p>}
                </section>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="btnCompr" >Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stck} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </div>
    )
}

export { ItemDetail }