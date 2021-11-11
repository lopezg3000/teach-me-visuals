import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';

export default function TotalPrice() {
    const cart = useSelector(selectCart);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const price = cart.map(cart => {
            let price = 0;
            price = + cart.price;
            return price;
        });

        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        const reducedPrice = price === 0 ? 0 : price.reduce(reducer);

        setTotalPrice(reducedPrice);
    }, [cart]);

    return (
        <div>
            <h3>Total Price: {totalPrice}</h3>
        </div>
    )
}
