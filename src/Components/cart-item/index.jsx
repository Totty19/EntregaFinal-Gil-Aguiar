import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'



export const CartItem = ({nombre, precio, quantity, img, id}) => {

    const {removeItem} = useContext (CartContext)

    return (
        <div className='productsContainer'>
            <picture> <img src={img} className='imagen' alt='pic' /> </picture>
            <p className='name'>{nombre}</p>
            <p className='text'>Precio por unidad: {precio}</p>
            <p className='text'>Cantidad: {quantity}</p>
            <button onClick={() => removeItem(id)}> X </button>
        </div>
    )
}