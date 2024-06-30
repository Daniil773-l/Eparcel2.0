// withAuth.js
import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
    return (props) => {
        const { isAuthenticated } = useAuth();
        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        }
        return <Component {...props} />;
    };
};

export default withAuth;
