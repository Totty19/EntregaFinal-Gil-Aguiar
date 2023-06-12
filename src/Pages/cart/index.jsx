import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import { CartItem } from "../../Components"

const Cart = () => {
    const { cart , clearCart, totalQuatity, total} = useContext(CartContext)

    if (totalQuatity === 0) {
        return (
            <div>
                <h1>No hay item en el carrito</h1>
                <Link to='/' classname="" >Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/> )}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="">Checkout</Link>
        </div>
    )
}

export { Cart }