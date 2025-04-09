import { PropsWithChildren, useEffect } from "react";
import { user } from "@/interfaces";
import { useAuth } from "@/components/authProvider";
import { useNavigate } from "react-router-dom";


type protectedRouteProps = PropsWithChildren & {
    allowedRoles?: user['role'][]
}


export default function ProtectedRoute({ allowedRoles, children }: protectedRouteProps) {


    const { currentUser, isUserConnected, isLoading} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {

       

        if (currentUser === undefined && !isUserConnected) {
          
          
        }
      }, [currentUser, isLoading, navigate]);

      if(isLoading){
        return <p>Loading</p>
      }

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


