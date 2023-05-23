import { useEffect, useState } from "react"
import { getProductById } from "../../AsyncMock"
import { ItemDetail } from "../itemDetail"
import { useParams } from "react-router-dom"

const ItemDetailCont = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams () 

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ContainerPadre">
            <ItemDetail {...product}/>
        </div>
    )
}

export { ItemDetailCont }