import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts, fetchProducts } from '../redux/features/products/productsSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}






