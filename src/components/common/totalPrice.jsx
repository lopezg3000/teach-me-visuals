import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';

export default function TotalPrice() {
    const cart = useSelector(selectCart);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const getPrice = cart.map(cart => {
            let price = 0;
            price = + cart.price;
            // console.log(price);
            return price;
        });
        console.log(getPrice);

        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        const reducedPrice = cart.length === 0 ? 0 : getPrice.reduce(reducer);

        setTotalPrice(reducedPrice);
    }, [cart]);

    return (
        <div>
            <h3>Total Price: {totalPrice === 0 ? 'Empty Cart' : totalPrice}</h3>
        </div>
    )
}
