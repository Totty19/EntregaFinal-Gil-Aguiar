
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from '../../AsyncMock'
import { ItemList } from "../ItemList"
import { useParams } from "react-router-dom"


const ItemListCont = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })  
            .catch(error => {       
                console.error(error)
            })    
    }, [categoryId])

    return(
        <div className="ContPadre">
            <ItemList products={products} />
        </div>
    )
}

export {ItemListCont} 