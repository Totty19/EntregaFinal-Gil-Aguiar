import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../../CartWidget/CartWidget';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import { ContacUbic,Login,SingUp,Dashboard, Tasks, Cart, Task} from '../index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faUser, faUsers} from '@fortawesome/free-solid-svg-icons'
import { ItemListCont } from '../../ItemListCont';
import { ItemDetailCont } from '../../itemDetailCont';
import { CheckOut } from '../../checkout';


const NavBar = () =>{ 
return (
    <BrowserRouter>
        <nav className='NvBar'>
                <Container className='ConTitulo'>
                    <NavLink to="/dashboard">Flow Vestiment</NavLink>
                    <Form className="d-flex">
                            <Form.Control
                                type="search"   
                                placeholder="Escriba aqui..."
                                className="m-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark" className="m-2 p-2 ">Buscar</Button>
                    </Form>
                </Container>    
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="/contacto-ubicacion" className='link'>
                                        Contacto y ubicacion
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </NavLink>
                                    <NavDropdown title="Productos" id="collasible-nav-dropdown" menuVariant="dark">
                                        <NavLink to="/category/hombre" className='Cont link'>
                                            Hombre
                                        </NavLink>
                                        <NavDropdown.Divider />
                                        <NavLink to="/category/mujer" className='Cont link'>
                                            Mujer
                                        </NavLink>
                                        <NavDropdown.Divider />
                                        <NavLink to="/category/accesorios" className='Cont link'>
                                            Accesorios
                                        </NavLink>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavLink to="/login" className='link'>
                                        Iniciar sesión
                                        <FontAwesomeIcon icon={faUser} />
                                    </NavLink>
                                    <NavLink to="/singup" className='link'>
                                        Crear cuenta
                                        <FontAwesomeIcon icon={faUsers} />
                                    </NavLink>
                                    <CartWidget />
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        <Routes>
            <Route path='/contacto-ubicacion' element={<ContacUbic />} />
            <Route path='/category/:categoryId' element={<ItemListCont />} />
            <Route path='/item/:itemId' element={<ItemDetailCont />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/task' element={<Task />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/singup' element={<SingUp />} />
            <Route path='/checkout' element={<CheckOut />} />
        </Routes>
    </BrowserRouter>


);
}

export { NavBar }