import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts, fetchProducts } from '../redux/features/products/productsSlice';
import { addToCart } from '../redux/features/cart/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

export default function Shop() {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const productsStatus = useSelector((state) => state.products.status)

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productsStatus, dispatch]);

    return (
        <div>
            {products.slice(0, 5).map(product => (
                <div key={product.id}>
                    <Card style={{ width: '35rem' }}>
                        <Row>
                            <Col >
                                <Card.Img style={{ width: '10rem' }} variant="top" src={product.image} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text style={{ height: '3.3rem', overflowX: 'hidden' }}>{product.description}</Card.Text>
                                    <Card.Text>{`$ ${product.price}`}</Card.Text>
                                    <Button variant="success" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
                                </Card.Body>
                            </Col>

                        </Row>
                    </Card>
                </div>
            ))}
        </div>
    )
}






