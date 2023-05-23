import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-bootstrap"


const CartWidget = () => {
    return (
        <div className='imgCart link'>
            <NavLink to='#carrito'>0<FontAwesomeIcon icon={faCartShopping} className="link"/></NavLink>
        </div>
    )
}

export default CartWidget
