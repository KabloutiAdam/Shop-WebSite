import { PropsWithChildren, useEffect } from "react";
import { user } from "@/interfaces";
import { useAuth } from "@/components/authProvider";
import { Navigate, useNavigate } from "react-router-dom";


type protectedRouteProps = PropsWithChildren & {
    allowedRoles?: user['role'][]
}


export default function ProtectedRoute({ allowedRoles, children }: protectedRouteProps) {


    const { currentUser, isUserConnected } = useAuth()
    const navigate = useNavigate()

    console.log(currentUser)
    useEffect(() => {
        if (currentUser === undefined && !isUserConnected) {
            console.log("+3")
          navigate("/login");
        }
      }, [currentUser, navigate]);

    if (currentUser === undefined) {
        return <p>Loading</p>
    }


    if (
        currentUser === null ||
        (allowedRoles && !allowedRoles.includes(currentUser.role))
    ) {
        return <div>Permission denied</div>;
    }

    return children
}


