import { Route, Redirect } from 'react-router-dom';
import * as storage from '../storage.helper';

export default function ProtectedRoute({ component: Component, ...rest }) {
    
    const token = storage.getValueByKey("token");

    return (
        <Route {...rest}
            render={(props) => token ? (
                <Component />
            ) : (
                <Redirect to="/Login" />
            )}
        />
    )
}
