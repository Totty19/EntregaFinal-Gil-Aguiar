import { addDoc, collection, getFirestore } from "/firebase/firebaseConfig"

const ventasData=async(venta)=>{
    const db= getFirestore();
    const ventaCollection=collection (db,'venta');
    const {id}=await addDoc(ventaCollection,venta)
    
    console.log(id)
    return id;
    
    
}
export {ventasData};