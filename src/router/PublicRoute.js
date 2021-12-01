import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const {login} = useSelector(state => state.auth)
    

    return login
        ? <Navigate to="/" />
        : children
}