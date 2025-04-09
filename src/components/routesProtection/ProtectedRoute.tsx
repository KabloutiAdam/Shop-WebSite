import { PropsWithChildren, useEffect } from "react";
import { user } from "@/interfaces";
import { useAuth } from "@/components/authProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";


type protectedRouteProps = PropsWithChildren & {
    allowedRoles?: user['role'][]
}


export default function ProtectedRoute({ allowedRoles, children }: protectedRouteProps) {


    const { currentUser, isUserConnected, isLoading } = useAuth()
    const navigate = useNavigate()


    if (isLoading ||currentUser === undefined) {
        return <p>Loading</p>
    }


    if (
        currentUser === null ||
        (allowedRoles && !allowedRoles.includes(currentUser.role))
    ) {
        console.log(currentUser)
        return <Navigate to="/login" replace />;
    }

    return children
}


