const ContacUbic = () => {
    return (
        <>
            <div className="ContUbic">
                <img src="https://static.vecteezy.com/system/resources/previews/009/921/875/original/e-mail-address-telephone-number-and-letter-icons-print-screen-on-circle-wooden-block-on-table-for-webpage-business-contact-and-customer-service-concept-illustrator-vector.jpg" alt="" />
                <h1>Contacto y ubicaciòn</h1>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1139.5415981585268!2d-58.260571370233855!3d-32.47778637409245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDI4JzM5LjYiUyA1OMKwMTUnMzcuNCJX!5e0!3m2!1ses!2sar!4v1686520139917!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h2>Nuestro contactos</h2>
                <div className="ContNum">
                    <p>12345648</p>
                    <p>12348956</p>
                </div>
                <div class="boxCont">
                <h2>Contactanos aqui!</h2>
                    <form action="" method="get" class="cajaCont">
                        <label class="lbl">
                            <input type="email" name="Email" required placeholder="Escriba su email"/>
                        </label>
                        <label class="lbl">
                            <input type="text" name="Asunto" required placeholder="Escriba el asunto del correo"/>
                        </label>
                        <textarea class="text" name="" id="" cols="30" rows="10" placeholder="Deje su mensaje para Flow Vestiment aqui"></textarea>
                        <div className="ContBtn">
                            <input type="reset" value="Limpiar" class="btn"/>
                            <input type="submit" value="Enviar" class="btn"/>   
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export {ContacUbic} 