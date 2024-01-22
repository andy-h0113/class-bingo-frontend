import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {useContext, useState} from "react";
import axiosInstance from "../../utils/axiosInstance";
import {useNavigate} from "react-router-dom";
import {SessionDispatchContext} from "../../context/SessionContext";


export default function SignIn({ change }) {
    const [errorStatus, setErrorStatus] = useState(false)
    const navigate = useNavigate()
    const dispatch = useContext(SessionDispatchContext)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let loginResponse = await handleLogin(data.get('email'), data.get('password'))

        if (loginResponse === true) {
            setErrorStatus(false)
            console.log(errorStatus)
            dispatch({
                type: 'start'
            });

            navigate('/')
        } else {
            setErrorStatus(true)
            console.log(errorStatus)
        }
    };

    const handleLogin = async (email, password) => {
        try {
            const response = await axiosInstance.post('/login/',
                {
                    "email": email,
                    "password": password
                })
            const {accessToken, refreshToken} = response.data

            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)

            return true
        } catch (error) {
            console.log("Login Failed", error)
            return false
        }
    }

    return (
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={() => change()}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
    );
}