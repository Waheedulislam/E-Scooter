/* eslint-disable react/prop-types */
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.config';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div><LoadingSpinner></LoadingSpinner></div>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />


};

export default PrivateRoute;