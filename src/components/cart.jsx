import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/features/cart/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import TotalPrice from './common/totalPrice';

export default function Cart() {
    const cart = useSelector(selectCart);

    return (
        <div>
            {cart.map(product => (
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
                                    <Button variant="success" >Add to Cart</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            ))}
            <TotalPrice />
        </div>
    )
}