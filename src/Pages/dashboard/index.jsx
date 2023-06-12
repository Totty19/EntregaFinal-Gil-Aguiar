import { Link } from 'react-router-dom'
import FondoProd1 from '../../assets/fondoProd.png'
import FondoProd2 from '../../assets/fondProdMuj.png'
import FondoProd3 from '../../assets/fondAcc.png'

const Dashboard = () => {
    
    return (
        <div className='ContInicio'>
            <h4 className='tituloInicio'>Llevate los productos que pronto podrian ser tuyos!!</h4>
            <div className='Acc1'>
                <img src={FondoProd1} alt="fondo de los productos" className='imgInicio uno'/>
                <Link to='/category/hombre' className='verMas'>Ver mas productos de hombre</Link>
            </div>
            <div className='Acc2'>
                <img src={FondoProd2} alt="fondo de los productos" className='imgInicio dos'/>
                <Link to='/category/mujer' className='verMas'>Ver mas productos de mujer</Link>
            </div>
            <div className='Acc3'>
                <img src={FondoProd3} alt="fondo de los productos" className='imgInicio tres'/>
                <Link to='/category/accesorios' className='verMas'>Ver mas accesorios</Link>
            </div>
            <h3 className='titProd'>Somos un emprendimiento de indumentaria recien comenzando con muchos proyectos a futuros!</h3>
        </div>
    )
}

export {Dashboard}