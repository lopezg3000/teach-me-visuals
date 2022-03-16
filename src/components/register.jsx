import React, { useState } from 'react';
import Input from './common/input';
import Select from './common/select';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
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

        // doSubmit();
    }

    // console.log('This is the user state: ', user);
    // console.log(errors);
    // console.log(option);
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Input
                    name="firstName"
                    label="First Name"
                    onChange={handleChange}
                    type="text"
                    placeholder="John"
                    error={errors.firstName}
                />
                <Input
                    name='lastName'
                    label="Last Name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Doe"
                    error={errors.lastName}
                />
            </Row>
            <Row className="mb-3">
                <Input
                    name='username'
                    label="Email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter email"
                    error={errors.username}
                />
            </Row>
            <Row className="mb-3">
                <Input
                    name='password'
                    label='Password'
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    error={errors.password}
                />
            </Row>
            <Row className="mb-3">
                <Input
                    name='address'
                    label="Address"
                    onChange={handleChange}
                    type="text"
                    placeholder="1234 Main St"
                    error={errors.address}
                />
            </Row>
            <Row className="mb-3">
                <Input
                    name='city'
                    label='City'
                    onChange={handleChange}
                    type="text"
                    placeholder="Houston"
                    error={errors.city}
                />
                <Select
                    name="state"
                    label="State"
                    value={option}
                    options={states}
                    onChange={handleSelect}
                    error={errors.state}
                />
                <Input
                    name='zipCode'
                    label='Zip Code'
                    onChange={handleChange}
                    type="text"
                    error={errors.zipCode}
                />
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
