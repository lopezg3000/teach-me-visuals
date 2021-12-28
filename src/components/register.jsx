import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function Register() {
    const [user, setUser] = useState({});
    const [option, setOption] = useState('')

    const handleChange = ({ currentTarget: target }) => {
        const userClone = { ...user };
        userClone[target.name] = target.value;
        setUser(userClone);
    }
    console.log('This is the user state: ', user);
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        name='firstName'
                        onChange={handleChange}
                        type="text"
                        placeholder="John"
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        name='lastName'
                        onChange={handleChange}
                        type="text"
                        placeholder="Doe"
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name='username'
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name='password'
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>

                {/* //may need to find out how to do this
                <Form.Group as={Col} controlId="formGridPasswordConfirmation">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group> 
                */}
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    name='address'
                    onChange={handleChange}
                    type="text"
                    placeholder="1234 Main St"
                />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group> */}

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        name='city'
                        onChange={handleChange}
                        type="text"
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                        name='zip'
                        onChange={handleChange}
                        type="number"
                    />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Agree to terms and conditions" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
