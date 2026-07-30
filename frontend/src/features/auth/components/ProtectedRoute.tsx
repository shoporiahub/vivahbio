import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import type { ReactNode } from "react";

import { useAuthStore } from "../store/auth.store";

interface Props {
    children: ReactNode;
}

function ProtectedRoute({ children }: Props) {
    const {
        user,
        loading,
        fetchCurrentUser,
        logout,
    } = useAuthStore();

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        if (!token || user) return;

        fetchCurrentUser().catch(() => {
            logout();
        });
    }, [token, user, fetchCurrentUser, logout]);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (!user || loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
}

export default ProtectedRoute;