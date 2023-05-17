
import { useEffect, useState } from "react"
import { getProducts } from '../../AsyncMock'
import { ItemList } from "../ItemList"


const ItemListCont = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })  
            .catch(error => {       
                console.error(error)
            })    
    }, [])

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}

export {ItemListCont} 