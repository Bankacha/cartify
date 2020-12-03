import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdTrash } from "react-icons/io";
import {deleteCartItem, increase} from '../../store/actions/index'

export function Cart() {

    const dispatch = useDispatch();
    const cart = useSelector(s => s.products.cart)

    // const newCart = cart.length > 0 ? cart : [{product :'The' , name: 'cart is', quantity: 'currently', price: 'empty'}] 

    const increaseCartItem = () => {
        dispatch(increase(1))
    }
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
                        cart.map((c, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{c.product.product}</td>
                                    <td>{c.product.name}</td>
                                    <td><button onClick={ ()=> increaseCartItem()}/>{c.quantity}<button/></td>
                                    <td>{c.product.price}</td>
                                    <td><IoMdTrash type='button' onClick={()=>dispatch(deleteCartItem(c.product.id))}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}