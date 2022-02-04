import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { states } from '../data/states';
import Joi from 'joi';


export default function Register() {
    const [user, setUser] = useState({});
    const [option, setOption] = useState('');
    const [errors, setErrors] = useState({});


    const strongPasswordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    // Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length"

    const schema = {
        firstName: Joi.string().min(1).max(20).required(),
        lastName: Joi.string().min(1).max(20).required(),
        username: Joi.string().email({ tlds: { allow: false } }).label('Email').required(),
        password: Joi.string()
            .pattern(new RegExp(strongPasswordRegex))
            .message("Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length")
            .required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        zipCode: Joi.string().required()
    };

    const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const subSchema = Joi.object({ [name]: schema[name] });
        const { error } = subSchema.validate(obj);

        return error ? error.details[0].message : null;
    };

    const handleChange = ({ currentTarget: target }) => {
        const errorsData = { ...errors };
        const errorMessage = validateProperty(target);
        if (errorMessage) errorsData[target.name] = errorMessage;
        else delete errorsData[target.name];

        const userClone = { ...user };
        userClone[target.name] = target.value;
        setUser(userClone);
        setErrors(errorsData);
    };

    const handleSelect = (e) => {
        setOption(e.currentTarget.value);
        handleChange(e);
    };

    //Validates form when handleSubmit is called
    const validate = () => {
        const options = { abortEarly: false };
        const schemaJoiObj = Joi.object(schema);
        const { error } = schemaJoiObj.validate(user, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    }

    const handleSubmit = e => {
        e.preventDefault();

        const errors = validate();
        setErrors(errors || {});
        if (errors) return;

        console.log('This is an error', errors);
    }

    // console.log('This is the user state: ', user);
    // console.log(errors);
    return (
        <Form onSubmit={handleSubmit}>
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
                {errors.firstName && (
                    <div className="alert alert-danger">
                        {errors.firstName}
                    </div>
                )}
                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        name='lastName'
                        onChange={handleChange}
                        type="text"
                        placeholder="Doe"
                    />
                </Form.Group>
                {errors.lastName && (
                    <div className="alert alert-danger">
                        {errors.lastName}
                    </div>
                )}
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
                {errors.username && (
                    <div className="alert alert-danger">
                        {errors.username}
                    </div>
                )}
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
                {errors.password && (
                    <div className="alert alert-danger">
                        {errors.password}
                    </div>
                )}
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
            {errors.address && (
                <div className="alert alert-danger">
                    {errors.address}
                </div>
            )}

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        name='city'
                        onChange={handleChange}
                        type="text"
                    />
                </Form.Group>
                {errors.city && (
                    <div className="alert alert-danger">
                        {errors.city}
                    </div>
                )}

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select name='state' defaultValue={option} onChange={handleSelect}>
                        <option value=''>Choose...</option>
                        {states.map(state => (
                            <option key={state.name} value={state.name}>
                                {state.abbreviation}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {errors.state && (
                    <div className="alert alert-danger">
                        {errors.state}
                    </div>
                )}

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                        name='zipCode'
                        onChange={handleChange}
                        type="text"
                    />
                </Form.Group>
                {errors.zipCode && (
                    <div className="alert alert-danger">
                        {errors.zipCode}
                    </div>
                )}
            </Row>

            {/* <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Agree to terms and conditions" />
            </Form.Group> */}

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
