import React, { useState } from 'react'
import axios from 'axios';
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
import { axiosInstance } from '../axios.util';



export default function Register() {

    const initialForm = {
        Name: "",
        Email: "",
        Password: "",
        PasswordConfirmation: ""
    }
    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ ...initialForm })


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleTextChange = (value, key) => {
        setForm({
            ...form,
            [key]: value
        })
    }
    const RegisterPost = async(event) => {
        event.preventDefault();
        if (form.Name.trim() === "" || 
        form.Email.trim() === "" || 
        form.Password.trim() === "" || 
        form.PasswordConfirmation.trim() === "") {
            alert("Missing Information")
            return;
        }
        try {
            debugger;
            const { data } = await axiosInstance.post(`/api/auth/register`, {
                name: form.Name,
                email: form.Email,
                password: form.Password,
                password_confirmation: form.PasswordConfirmation
            })
           dispatch(userActions.set(data.user))
            history.push('/Login');
            alert(data.message)
        } catch (error) {
            alert("Registration Failed")
        }
        setForm({ ...initialForm })
    }


    return (
        <div className='RegisterDiv'>
            <form className='RegisterForm'>
                <TextField
                    id="Name"
                    label="Name"
                    fullWidth
                    variant="outlined"
                    value={form.Name}
                    onChange={(e) => handleTextChange(e.target.value, "Name")}
                    className='RegisterInput'
                />
                <TextField
                    id="Email"
                    label="Email"
                    fullWidth
                    variant="outlined"
                    value={form.Email}
                    onChange={(e) => handleTextChange(e.target.value, "Email")}
                    className='RegisterInput'
                />

                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="Password"
                        type={showPassword ? 'text' : 'password'}
                        value={form.Password}
                        onChange={(e) => handleTextChange(e.target.value, "Password")}
                        label="Password"
                        className='RegisterInput'
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
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={form.PasswordConfirmation}
                        onChange={(e) => handleTextChange(e.target.value, "PasswordConfirmation")}
                        label="Password Confirmation"
                        className='RegisterInput'
                    />
                </FormControl>

                <Button variant="contained" onClick={RegisterPost} className='RegisterButton'>
                    Register
                </Button>
            </form>
        </div>
    )
}
