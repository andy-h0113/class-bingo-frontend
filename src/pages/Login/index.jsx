import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {useContext, useEffect, useState} from "react";
import {SessionDispatchContext} from "../../context/SessionContext";


const defaultTheme = createTheme();

export default function Login() {
    const [isSignIn, setIsSignIn] = useState(true)
    const dispatch = useContext(SessionDispatchContext)

    const handleState = ()=> {
        setIsSignIn(!isSignIn)
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if (!accessToken) {
            dispatch({
                type:'end'
            })
        }
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    {isSignIn && <SignIn change={handleState}/>}
                    {!isSignIn && <SignUp change={handleState}/>}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}