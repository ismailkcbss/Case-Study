import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { userActions } from '../Redux/slice/userSlice';
import * as storage from '../storage.helper'

export default function Navbar() {

    const history = useHistory();
    const dispatch = useDispatch();

    const token = storage.getValueByKey("token")

    const handleLogout = () => {
        storage.setKeyWithValue("token", "");
        dispatch(userActions.logout());
        history.push('/');
    }

    return (
        <div className='NavbarDiv'>
            {
                token ? (
                    <div>
                        <button className='NavbarButton' onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    ""
                )
            }
        </div>
    )
}
