import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home'
import Register from './Auth/Register';
import Login from './Auth/Login';
import Cases from './Auth/Cases';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Cases' component={Cases} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
