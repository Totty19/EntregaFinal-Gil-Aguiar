import cart from './Assets/cart.png'

const CartWidget = () => {
    return (
        <div className='imgCart'>
            <a href='#carrito'><img src={cart} alt="cart-widget" className='imgCart'/>0</a>
        </div>
    )
}

export default CartWidget
