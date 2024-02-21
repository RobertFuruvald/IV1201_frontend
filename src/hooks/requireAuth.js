import { useLocation, Navigate, useNavigate, Outlet } from "react-router-dom";
import React, { useEffect } from 'react';
import { useAuth } from "../hooks/useAuth";

function RequireAuth({ allowedRole, children }) {
    const location = useLocation();
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.token) {
            navigate("/");
        } else if (auth.role !== allowedRole) {
            navigate("/not-found");
        }
    }, [auth.token, auth.role, allowedRole, navigate]);

    if (auth.token && auth.role === allowedRole) {
        return children;
    }

    return <Outlet />;
}

export default RequireAuth;
