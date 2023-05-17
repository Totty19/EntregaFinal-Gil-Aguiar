import { ItemDetailCont, ItemListCont } from "../../Components"

const Product = () => {
    return (
        <div className='Cont'>
            <h1>Productos</h1>
            <ItemListCont />
            <ItemDetailCont />
        </div>
    )
}

export { Product }