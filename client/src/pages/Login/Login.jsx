import React, {useState, useEffect, useRef, useContext} from 'react';
import axios from 'axios';
import {Context} from '../../context/Context';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {Box, TextField, Button, IconButton, InputAdornment} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';

import './Login.css';
const FormTheme = createTheme({
    palette: {
      primary: {
        main: '#404040',
      },
      secondary: {
        light: '#0066ff',
        main: '#4C4DDC',
        contrastText: '#ffcc00',
      },
      
      contrastThreshold: 2,
      tonalOffset: 0.1,
    },
  });

const LoginTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#7b7b7b',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '900',
    },
    '& label': {
        color: '#9E9E9E',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '500',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#7b7b7b',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: 8,

        '& fieldset': {
            borderColor: '#404040',
        },
        '&:hover fieldset': {
            borderColor: '#7b7b7b',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#7b7b7b',
        },
    },
});

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    fontSize: '16px',
    textTransform: 'Capitalize',
  }));

const Login = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const userRef = useRef();
    const passwordRef = useRef();
    const {user, dispatch, isFetching} = useContext(Context);

    const handleClick = async(e) => {
        e.preventDefault();
        dispatch({type : "LOGIN_START"});
        try {
            const res = await axios.post("https://fendmaster-app.herokuapp.com/api/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({
                type : "LOGIN_SUCCESS",
                payload: res.data,
            });
            res.data && window.location.replace("/UserHome");
            alert("Log In success!");
        } catch (error) {
            dispatch({
                type : "LOGIN_FAILURE",
            });
            alert("Cannot Log In, password or username does not match!");
        }
    };
    console.log(isFetching);
  return (
    <div className="app-login-main">
        <div className="app-login-container">
            <h1 className="title">Sign in to</h1>
            <h1 className="second-title">FrontEndMaster Blog</h1>
            <ThemeProvider theme={FormTheme}>
                <Box component='form' noValidate autoComplete="off" sx={{
                    ml: 12,
                    width: 604,
                    maxWidth: '100%',
                    input: {
                        color:'white'
                    }
                }}>
                    <div className="login-form-group">
                        <LoginTextField fullWidth label="Username" id="custom-css-outlined-input"
                        inputRef={userRef}/>
                        <LoginTextField
                            fullWidth label="Password"  
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            id="outlined-adornment-password" 
                            style={{ marginTop: 25, marginBottom: 25 }}
                            inputRef={passwordRef}
                            InputProps= {
                            {endAdornment:
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    color="primary"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            }}
                        />
                        <LoginButton variant="contained" style={{width: '100%'}} color="secondary"
                        onClick={handleClick}>Sign In</LoginButton>
                        <p className="register-text">New to FrontEndMaster? <a href="/Register"> Register</a></p>
                    </div>
                </Box>
            </ThemeProvider>
        </div>
    </div>
  )
}

export default Login