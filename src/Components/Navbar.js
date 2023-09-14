import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { userActions } from '../Redux/slice/userSlice';
import {getValueByKey} from '../storage.helper'

export default function Navbar() {

    const history = useHistory();
    const dispatch = useDispatch();

    const token = getValueByKey("token")

    const handleLogout = () => {
        dispatch(userActions.logout());
        history.push('/');
    }

    return (
        <div className='NavbarDiv'>
            {
                token ? (
                    <div>
                        <button onClick={() => (history.push('/Cases'))}>Cases</button>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => (history.push('/Login'))}>Login</button>
                    </div>
                )
            }
        </div>
    )
}
