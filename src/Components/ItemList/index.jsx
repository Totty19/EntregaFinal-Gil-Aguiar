import { Item } from '../Item'

const ItemList = ({ products }) => {
    return (
        <div>
        {products && products.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}


export { ItemList } 