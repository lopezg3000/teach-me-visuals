import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';

export default function Input({ name, label, error, ...rest }) {
    return (
        <React.Fragment>
            <Form.Group as={Col} controlId={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    {...rest}
                    name={name}
                />
            </Form.Group>
            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}
        </React.Fragment>
    )
}
