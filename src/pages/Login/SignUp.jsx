import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useContext, useEffect, useState} from "react";
import axiosInstance from "../../utils/axiosInstance";
import {useNavigate} from "react-router-dom";
import {SessionDispatchContext} from "../../context/SessionContext";
import {Alert, Collapse, FormControl, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axiosInstanceNoAuth from "../../utils/axiosInstanceNoAuth";



export default function SignUp({ change }) {
    const [errorStatus, setErrorStatus] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [section, setSection] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    // const [allSections, setAllSections] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const allSections = [
        {
            "section_id": 1,
            "section_name": "Section 1"
        },
        {
            "section_id": 2,
            "section_name": "Section 2"
        },
        {
            "section_id": 3,
            "section_name": "Section 3"
        },
        {
            "section_id": 4,
            "section_name": "Section 4"
        },
        {
            "section_id": 5,
            "section_name": "Section 5"
        },
        {
            "section_id": 6,
            "section_name": "Section 6"
        },
        {
            "section_id": 7,
            "section_name": "Section 7"
        },
        {
            "section_id": 8,
            "section_name": "Section 8"
        },
        {
            "section_id": 9,
            "section_name": "Section 9"
        },
        {
            "section_id": 10,
            "section_name": "Section 10"
        }
    ]


    const navigate = useNavigate()
    const dispatch = useContext(SessionDispatchContext)

    // useEffect( () => {
    //     getSections()
    // }, [])

    // const getSections = async () => {
    //     try {
    //         const response = await axiosInstance.get('/section/')
    //         setAllSections(response.data)
    //     } catch (error) {
    //         console.log("Failed to get sections", error)
    //     }
    // }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email.length === 0 || password.length === 0 || username.length === 0 || !section) {

        } else {
            setLoading(true)

            // const {status, data} = await handleRegister()

            // if (status) {

                // let loginResponse = await handleLogin()

                // if (loginResponse === true) {
                //     setErrorStatus(false)
                    dispatch({
                        type: 'start',
                        sessionStatus: true,
                        user_id: 1,
                        section_id: section.section_id,
                        username: username
                    });

                    navigate('/')
                // }
            // } else {
            //     setErrorStatus(true)
            //     const hasEmailError = Object.hasOwn(data, "email")
            //     const hasUserError = Object.hasOwn(data, "username")
            //
            //     const userErrorMessage = "A user with this username already exists."
            //     const emailErrorMessage = data.email[0] === "Enter a valid email address." ? data.email : "A user with this email already exists."
            //
            //     if (hasEmailError && hasUserError) {
            //         setErrorMessage(emailErrorMessage + '\n' + userErrorMessage)
            //     } else if (hasEmailError) {
            //         setErrorMessage(emailErrorMessage)
            //     } else if (hasUserError) {
            //         setErrorMessage(userErrorMessage)
            //     } else {
            //         setErrorMessage("There is a system error at the moment. Please try again later")
            //     }
            // }
            setLoading(false)
        }
    };

    const handleRegister = async () => {
        try {
            const response = await axiosInstance.post('/register/',
                {
                    "username": username,
                    "password": password,
                    "email": email,
                    "section_id": section.section_id
                })

            return ({
                status: true,
                data: response.data.user
            })
        } catch (error) {
            console.log("Sign-up failed", error)
            return ({
                status: false,
                data: error.response.data
            })
        }
    }

    const handleLogin = async () => {
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

    const handleChange = (event) => {
        setSection(event.target.value);
    };

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
                <AccountCircleIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1, maxWidth:500}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Section</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="section"
                        value={section}
                        label="Section"
                        onChange={handleChange}
                        onFocus={() => setErrorStatus(false)}
                    >
                        {allSections.map((section) => {
                            return (
                                <MenuItem key={section.section_id} value={section}>{section.section_name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <TextField
                    error={errorStatus}
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onFocus={() => setErrorStatus(false)}
                    autoFocus
                />
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
                    disabled={!email || !password || !username || !section}
                    sx={{mt: 3, mb: 2}}
                >
                    Register
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
                        {errorMessage}
                    </Alert>
                </Collapse>
                <Grid container>
                    <Grid item>
                        <Link href="#" variant="body2" onClick={() => change()}>
                            {"Already have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}