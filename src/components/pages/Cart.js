import { Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdTrash } from "react-icons/io";
import { deleteCartItem, increaseQuantity, decreaseQuantity } from '../../store/actions/index'
import { Link } from 'react-router-dom';

export function Cart() {

    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
      ];

    const dispatch = useDispatch();
    const cart = useSelector(s => s.products.cart)

    return (
        <div>
            <Table striped bordered hover variant="dark" className='text-center'>
                <thead>
                    <tr>
                        <th>C</th>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.length ? cart.map((c, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{c.product.product}</td>
                                    <td>{c.product.name}</td>
                                    <td>
                                        <Button onClick={() => dispatch(decreaseQuantity(c.product.id))}>-</Button>
                                        {c.quantity}
                                        <Button onClick={() => dispatch(increaseQuantity(c.product.id))}>+</Button>
                                    </td>
                                    <td>{c.product.price}</td>
                                    <td><IoMdTrash type='button' onClick={() => dispatch(deleteCartItem(c.product.id))} /></td>
                                </tr>
                            )
                        }) : (
                                <tr>
                                    <td colSpan={6}>There is not products added</td>
                                </tr>
                            )
                    }
                </tbody>
            </Table>
            <Link to="/order"><Button className="w-100 btn-warning">Continue to order</Button></Link>
        </div>
    )
}