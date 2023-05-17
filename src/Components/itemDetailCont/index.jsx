import { useEffect, useState } from "react"
import { getProductById } from "../../AsyncMock"
import { ItemDetail } from "../itemDetail"

const ItemDetailCont = () => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export { ItemDetailCont }