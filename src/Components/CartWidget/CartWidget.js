import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-bootstrap"
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"


const CartWidget = () => {

    const { totalQuatity } = useContext (CartContext)

    return (
        <div className='imgCart link'>
            <NavLink to='/cart' >{ totalQuatity }<FontAwesomeIcon icon={faCartShopping} className="link"/></NavLink>
        </div>
    )
}

export default CartWidget
