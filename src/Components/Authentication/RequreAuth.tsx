
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import React, { ReactChildren, ReactChild } from 'react';
interface Requre{
      children: React.ReactElement
}

const RequreAuth = ({children}: Requre) => {
      const [user , lodaing] = useAuthState(auth)
      const location = useLocation()
     
      if(lodaing){
            return <Loading></Loading>
      }

      if(!user){
            return <Navigate to="/login" state={{ from: location }} replace />;
      }
 

      return children
};

export default RequreAuth;