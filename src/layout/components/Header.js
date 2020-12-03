import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartWidget } from '../../components/shared/CardWidget';
import { IoMdSearch } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { searchProducts } from '../../store/actions/index'
import '../../components/styles/header.css'

export function Header() {

    const dispatch = useDispatch();
    const cart = useSelector(s => s.products.cart)


    const numberOfCartItems = () => {
        let count = 0;
        for (let item of cart) {
            count += item.quantity
        }
        return count
    }

    return (
        <div className='navSpacer'>
            <Navbar bg="light" expand="lg">
                <Link to="/"><Navbar.Brand >CARTIFY</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/cart">Cart</Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl onChange={e => dispatch(searchProducts(e.target.value))} type="text" placeholder="Search" className="mr-sm-2" />
                        <IoMdSearch type='button' variant="outline-success">Search</IoMdSearch>
                        <Link className='navCart' to='/cart'><CartWidget></CartWidget></Link>
                        {
                            cart.length ? <span className='numberCircle'>{numberOfCartItems()}</span> : ''
                        }
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}