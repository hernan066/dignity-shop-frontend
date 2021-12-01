import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {

    const {login} = useSelector(state => state.auth)
    

    return login
        ? children
        : <Navigate to="/" />
}