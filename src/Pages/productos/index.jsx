import { ItemDetailCont } from "../../Components"
import { Item } from "../../Components/Item"

const Product = () => {
    return (
        <div className='Cont'>
            <h1>Productos</h1>
            <Item />
            <ItemDetailCont />
        </div>
    )
}

export { Product }