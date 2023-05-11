import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


const Register = () => {
    const [errorPassword, steErrorPassword] = useState('');
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        //console.log(form);
        const name = event.target.fullname.value;
        console.log(name);
        const email = event.target.email.value;
        console.log(email);
        const password = event.target.password.value;
        console.log(password);

        //password validate

        if (!/(?=.*[A-Z])/.test(password)) {
            steErrorPassword('Password must contain a Capital letter');
            return;
        }
        if (password.length < 6) {
            steErrorPassword('Password should contain at least 6 character');
            return;

        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            steErrorPassword('Password should contain at least 2 digit')
            return

        }
        steErrorPassword('');

    }

    return (
        <div className='w-25 mx-auto shadow p-4'>
            <h2 className='text-center'> Register Here!</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='fullname' placeholder="Enter Full Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                {
                    <p className='text-danger my-2'>{errorPassword}</p>
                }

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        </div>
    );
};

export default Register;