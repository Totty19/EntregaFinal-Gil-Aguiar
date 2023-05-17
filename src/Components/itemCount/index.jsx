import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="contBtns">
            <div className="contBtn">
                <button className="btn R" onClick={decrement}>-</button>
                <h4 className="num">{quantity}</h4>
                <button className="btn G" onClick={increment}>+</button>
            </div>
            <div className="contBtnAdd">
                <button className="btn Add" onClick={() =>onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export { ItemCount }