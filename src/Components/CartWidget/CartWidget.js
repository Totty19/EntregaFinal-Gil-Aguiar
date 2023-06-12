import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/cartContext"


const CartWidget = () => {

    const { totalQuatity } = useParams(CartContext)

    return (
        <div className='imgCart link'>
            <NavLink to='/cart' style={{display: totalQuatity > 0 ? 'block' : 'none'}}>{ totalQuatity }<FontAwesomeIcon icon={faCartShopping} className="link"/></NavLink>
        </div>
    )
}

export default CartWidget
