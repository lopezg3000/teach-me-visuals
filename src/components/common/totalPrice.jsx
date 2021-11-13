import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';

export default function TotalPrice() {
    const cart = useSelector(selectCart);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const getPrice = cart.map(cart => {
            return cart.price;
        });

        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        const reducedPrice = cart.length === 0 ? 0 : getPrice.reduce(reducer);

        setTotalPrice(reducedPrice);
    }, [cart]);

    return (
        <div>
            {totalPrice === 0 ? <h3>Cart Empty</h3> : <h3>Total Price: {totalPrice}</h3>}
        </div>
    )
}
