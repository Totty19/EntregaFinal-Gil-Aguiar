import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const Task = () =>{
    const { id } = useParams();
    
    const [task, setTask] = useState();
    const [mnsj, setMnsj] = useState("Cargando...");

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "itemCollección", "3wMgiw0kGwLSjxXb6SQZ-N11");
        getDoc(docRef).then((doc) =>{
            if(doc.exists()){
                setTask(doc.data());
            } else {
                setMnsj("No se encontraron datos");
            }
        });
    }, [])

    if (!task) return <p>{mnsj}</p>;

    return (
        <table>
            <tbody>
                <tr>
                    <th>{task.nombre}</th>
                    <th>{task.stck}</th>
                    <th>{task.precio}</th>
                </tr>
            </tbody>
        </table>
    )
}

export { Task }