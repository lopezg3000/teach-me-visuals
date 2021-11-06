import React from 'react';
import { Nav } from 'react-bootstrap';

//links added but still need to include routes as well as figure out how to make a link active when clicked


const links = ['Home', 'Shop', 'Cart', 'About Us', 'Login/Register'];

export default function navbar() {
    return (
        <div>
            <Nav
                activeKey="/home"
            >
                {links.map(link => (
                    <Nav.Item>
                        <Nav.Link eventKey={link}>{link}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    )
}
