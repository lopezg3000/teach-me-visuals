import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/features/cart/cartSlice';

//links added but still need to include routes as well as figure out how to make a link active when clicked


const links = [
    { path: '/home', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/login', label: 'Login' },
    { path: '/cart', label: 'Cart' },
];

export default function Navbar() {
    const cart = useSelector(selectCart);
    const cartLength = cart.length;

    return (
        <div>
            <Nav>
                {links.map(link => (
                    <Nav.Item key={link.label}>
                        <Nav.Link as={NavLink} to={link.path}>{link.label}</Nav.Link>
                    </Nav.Item>
                ))}
                <Nav.Item><Nav.Link>{cartLength}</Nav.Link></Nav.Item>
            </Nav>
        </div>
    )
}
