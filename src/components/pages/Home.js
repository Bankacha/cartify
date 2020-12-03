import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, addToCart } from '../../store/actions/index';
import { CardColumns, Card, Row, Col, Image } from 'react-bootstrap';
import { IoIosAddCircle } from 'react-icons/io';
import '../styles/home.css'
import {Cart} from './Cart'

const axios = require('axios').default;


export function Home() {

    const dispatch = useDispatch();
    const products = useSelector(s => s.products.data)
    const filtered = useSelector(s => s.products.filtered)


    const getAllProducts = () => {
        axios.get('https://5fabf5ed03a60500167e74ff.mockapi.io/webshop/merch').then(r => {
            dispatch(getProducts(r.data))
        }).catch((err) => {
            console.log('Error', err);
        })
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    const addItemToCart = (product) => {
        dispatch(addToCart( {
            product,
            quantity: 1,
           
        }))
    }


    const newProductList = filtered.length ? filtered : products;

    return (
        <div>
            <Image className='image' src="https://cartify.shopping/images/thumbs/0001392_Cartify-logo.png" fluid />
            <hr></hr>
            <Cart></Cart>
            <CardColumns>
                {
                    newProductList.map((p, i) => {
                        return (
                            <Card key={i}>
                                <Card.Img variant="top" src={p.image} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Row className="d-flex justify-content-between">
                                        <Col md={7}>{p.product}</Col>
                                        <Col md={{ span: 4, offset: 1 }} className="text-primary price" style={{ fontWeight: 'bold' }}>$ {p.price}</Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col md={{ span: 2, offset: 10 }}>
                                            <IoIosAddCircle alt='Add to cart' size='2em' type='button' onClick={ () => addItemToCart(p)}></IoIosAddCircle>
                                        </Col>
                                    </Row>

                                </Card.Footer>
                            </Card>
                        )
                    })
                }

            </CardColumns>
        </div>

    )
}