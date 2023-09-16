import React from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import Center from './Center';
import useForm from '../hooks/useForm';

const getFreshModel = () => ({
    name: '',
    email: ''
});

const Login = () => {
    const { values, setValues, errors, setErrors, handleInputChange } = useForm(getFreshModel);

    const login = e => {
        e.preventDefault();

        if (validate()) {
            console.log("Form is valid. Logging in...");
            // Add your login logic here
            // You can access the entered values through the 'values' object
        } else {
            console.log("Form is not valid. Please correct errors.");
        }
    };

    const validate = () => {
        let temp = {};
        temp.email = /\S+@\S+\.\S+/.test(values.email) ? "" : "Email is not valid.";
        temp.name = values.name !== "" ? "" : "This field is required.";
        setErrors(temp);
        return Object.values(temp).every(x => x === "");
    };

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant='h3' sx={{ my: 3 }}>QUIZ APP</Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete='off' onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                variant='outlined'
                                {...(errors.email && { error: true, helperText: errors.email })}
                            />
                            <TextField
                                label="Name"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                variant='outlined'
                                {...(errors.name && { error: true, helperText: errors.name })}
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                size='large'
                                sx={{ width: '90%' }}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    );
};

export default Login;
