import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { useEffect } from 'react';
import { useState } from 'react';

const Tasks = () =>{
    
    const [tasks, setTasks] = useState();
    const [mnsj, setMnsj] = useState("Cargando...");

    useEffect (() => {
        const db = getFirestore();
        const CollecionRef = collection(db, "itemCollección");
        getDocs(CollecionRef).then((querySnapshot) => {
            const itemsCollection = querySnapshot.docs.map((doc) => doc.data());
            setTasks(itemsCollection);
        });
    }, []);



    if (!tasks) return <p>{mnsj}</p>;

    // return (
    //     <table>
    //         <tbody>
    //             {tasks.map((task) => (
    //                 <>
    //                     <tr>
    //                     <th>{task.nombre}</th>
    //                     <th>{task.stck}</th>
    //                     <th>{task.precio}</th>
    //                     </tr>
    //                     <img src={task.img} alt="" />
    //                 </>
    //             ))}
    //         </tbody>
    //     </table>
    // )
}

export { Tasks }