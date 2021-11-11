import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//links added but still need to include routes as well as figure out how to make a link active when clicked


const links = [
    { path: '/home', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/cart', label: 'Cart' },
    { path: '/about', label: 'About' },
    { path: '/login', label: 'Login' }
];

export default function Navbar() {
    return (
        <div>
            <Nav>
                {links.map(link => (
                    <Nav.Item key={link.label}>
                        <Nav.Link as={NavLink} to={link.path}>{link.label}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    )
}
