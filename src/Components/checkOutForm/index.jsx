import { useState } from "react"

const CheckOutForm = ({ onConfirm }) => {
    const [name, setName] = useState ('')

    const [phone, setPhone] = useState ('')

    const [email, setEmail] = useState ('')


const handleConfirm = () => {
    
    const userData = {
        name,phone,email
    } 

    onConfirm(userData)
}

return ( 
    <div className="">
        <form onSubmit={handleConfirm} className="form">
                <input className="input"
                        placeholder="Nombre"  
                        type="text" 
                        value={name}
                        onChange={({target}) => setName (target.value)} />

                <input className="input"
                        placeholder="Celular"
                        type="text"
                        value={phone}
                        onChange={({target}) => setPhone(target.value)} />

                <input className="input"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={({target}) => setEmail(target.value)} />

                <button type="submit" className="btn order"> Crear orden </button>
        </form>
    </div>
)}

export { CheckOutForm }