import { faCreditCard, faLock, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <>
            <div className="topFooter">
                <section className="contTop">
                    <FontAwesomeIcon icon={faTruckFast}/>
                    <h6>Enviamos tu compra</h6>
                    <p>Entregas a todo el pais</p>
                </section>
                <section className="contTop">
                    <FontAwesomeIcon icon={faCreditCard}/>
                    <h6>Paga como quieras</h6>
                    <p>tarjetas de credito y debito</p>
                </section>
                <section className="contTop">
                    <FontAwesomeIcon icon={faLock}/>
                    <h6>Compra con seguridad</h6>
                    <p>tus datos siempre protegidos</p>
                </section>
            </div>

            <footer className="footer">
                <div className="contRedes">
                    <h3>Redes sociales</h3>
                </div>
                <div>
                    <h3>Medios de pagos</h3>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <p></p>
            </footer>
        </>
    );
};

export {Footer}