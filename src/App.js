import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Cases from './Auth/Cases';
import ProtectedRoute from './Auth/ProtectedRoute';
import CreateRequest from './Auth/CreateRequest';

function App() {

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
