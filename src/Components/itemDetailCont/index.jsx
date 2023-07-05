import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { ItemDetail } from "../itemDetail"

const ItemDetailCont = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'itemColección', "XgsEjdUdVmgpSRxzokCc");

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
        }, ["XgsEjdUdVmgpSRxzokCc"]);

    return (
        <div className="ContPadreDetalle">
            <ItemDetail {...product}/>
        </div>
    )
}

export { ItemDetailCont }