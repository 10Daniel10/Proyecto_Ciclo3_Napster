import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = ({children}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {return <div>Loading ...</div>}

  return (
      isAuthenticated ? (
         <>{children}</>
      ) : (
         <div>
            <span>No estas autorizado para ingresar al sitio</span>

         </div>
      )
   );
};

export default Profile;