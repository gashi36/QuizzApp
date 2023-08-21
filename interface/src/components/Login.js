import React, { useState } from 'react'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Center from './Center'
import useForm from '../hooks/useForm'

const getFreshModel = () => ({
    name: '',
    email: ''
})
const Login = () => {
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel)
    const { } = useForm();
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
                        <form noValidate>
                            <TextField
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                variant='outlined' />
                            <TextField
                                label="Name"
                                name="name"
                                variant='outlined' />
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
    )
}

export default Login