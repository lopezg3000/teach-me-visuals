import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';

export default function Select({ name, label, options, error, ...rest }) {
    return (
        <React.Fragment>
            <Form.Group as={Col} controlId={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Select {...rest} name={name}>
                    <option value="">Choose...</option>
                    {options.map(option => (
                        <option key={option.name} value={option.name}> {/*Will need to change to make select field reusable because name and abbreviation will not be always be properties of options*/}
                            {option.abbreviation}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}
        </React.Fragment>
    )
}
