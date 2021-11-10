import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts, fetchProducts } from './productsSlice';
import Shop from '../../../components/shop';


export default function productsList() {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const productsStatus = useSelector((state) => state.products.status)
    console.log('hello');

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productsStatus, dispatch]);

    return (
        <div>
            {products.slice(0, 5).map(product => (
                <Shop key={product.id} product={product} />
            ))}
        </div>
    )
}
