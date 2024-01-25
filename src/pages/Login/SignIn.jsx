import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {useContext, useState} from "react";
import axiosInstance from "../../utils/axiosInstance";
import {useNavigate} from "react-router-dom";
import {SessionDispatchContext} from "../../context/SessionContext";
import {Alert, Collapse, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import axiosInstanceNoAuth from "../../utils/axiosInstanceNoAuth";



export default function SignIn({ change }) {
    const [errorStatus, setErrorStatus] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useContext(SessionDispatchContext)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email.length === 0 || password.length === 0) {

        } else {
            setLoading(true)
            let loginResponse = await handleLogin(email, password)

            if (loginResponse === true) {
                setErrorStatus(false)
                const user = await getUser()
                console.log(user)

                dispatch({
                    type: 'start',
                    sessionStatus: true,
                    user_id: user.user_id,
                    section_id: user.section_id,
                    username: user.username
                });

                navigate('/')
            } else {
                setErrorStatus(true)
            }
            setLoading(false)
        }
    };

    const handleLogin = async (email, password) => {
        try {
            const response = await axiosInstance.post('/login/',
                {
                    "email": email,
                    "password": password
                })
            const {access, refresh} = response.data

            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshToken', refresh)

            return true
        } catch (error) {
            console.log("Login Failed", error)
            return false
        }
    }
    const getUser = async () => {
        try {
            const response = await axiosInstance.get('/user/' + email + '/')
            return response.data
        } catch (error) {
            console.log("Failed to get user", error)
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
                    bgcolor: 'background.paper'
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1, maxWidth:500}}>
                    <TextField
                        error={errorStatus}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => setErrorStatus(false)}
                        autoFocus
                    />
                    <TextField
                        error={errorStatus}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={() => setErrorStatus(false)}
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        loading={loading}
                        disabled={!email || !password}
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </LoadingButton>
                    <Collapse in={errorStatus} severity="error">
                        <Alert
                            severity="error"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setErrorStatus(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            Incorrect email or password
                        </Alert>
                    </Collapse>
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