import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Cases from './Auth/Cases';
import ProtectedRoute from './Auth/ProtectedRoute';
import CreateRequest from './Auth/CreateRequest';
import { axiosInstance } from './axios.util';
import { userActions } from './Redux/slice/userSlice';
import { useEffect, useState } from 'react';
import * as storage from './storage.helper'
import { useDispatch } from 'react-redux';

function App() {

//   const [userData, setUserData] = useState("")

//   const token = storage.getValueByKey("token");

//   const dispatch = useDispatch();

//   const getUserData = async () => {

//     if (token) {
//         try {
//             const { data } = await axiosInstance.get('/api/auth/user-profile')
//             setUserData(data.user)
//             dispatch(userActions.login(data.user))
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// useEffect(()=>{
//   if(!token) getUserData();
// },[token])


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/Register' component={Register} />
          <ProtectedRoute exact path='/Cases' component={Cases} />
          <ProtectedRoute exact path='/CreateRequest' component={CreateRequest} />
          <ProtectedRoute exact path='/CreateRequest/:id' component={CreateRequest} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
