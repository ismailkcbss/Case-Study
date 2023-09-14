import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../Redux/slice/userSlice';
import { useHistory } from 'react-router-dom';


import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { axiosInstance, setApiToken } from '../axios.util';
import * as storage from '../storage.helper'

export default function Login() {

    const initialForm = {
        Email: "",
        Password: ""
    }
    const dispatch = useDispatch();
    const history = useHistory();


    const [form, setForm] = useState({ ...initialForm })
    const [userData, setUserData] = useState()

    //Material UI
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleTextChange = (value, key) => {
        setForm({
            ...form,
            [key]: value,
        })
    }

    const LoginPost = async (event) => {
        if (form.Email.trim() === "" || form.Password.trim() === "") {
            alert("Missing Information")
            return;
        }
        try {
            const { data } = await axiosInstance.post(`/api/auth/login`, {
                email: form.Email,
                password: form.Password
            })
            storage.setKeyWithValue("token", data.access_token);
            setApiToken(data.access_token);
            dispatch(userActions.login(data))
            history.push('/Cases')
            alert("Login Success")
        } catch (error) {
            alert("Login Failed")
        }
    }

    return (
        <div className='LoginDiv'>
            <form className='LoginForm'>
                <TextField
                    id="Email"
                    label="Email"
                    fullWidth
                    variant="outlined"
                    value={form.Email}
                    onChange={(e) => handleTextChange(e.target.value, "Email")}
                    className='LoginInput'
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="Password"
                        type={showPassword ? 'text' : 'password'}
                        value={form.Password}
                        onChange={(e) => handleTextChange(e.target.value, "Password")}
                        label="Password"
                        className='LoginInput'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="start"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button variant="contained" onClick={LoginPost} className='LoginButton'>
                    Login
                </Button>
               <span style={{margin:"2em 0 2em 0" }}>Click here to <button className='LogintoRegister' onClick={()=>(history.push('/Register'))}>Register</button></span>
            </form>
        </div>
    )
}
