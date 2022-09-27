import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Button = () => {
      const [user, loadings, error] = useAuthState(auth);
      const navigate = useNavigate()
      
      return (
            <>
            <button onClick={()=>navigate('/login')} className="bg-red-500 text-white  px-6 py-2 rounded-full">
            Get Started
          </button>
          {user && <button onClick={()=>signOut(auth)}>logOut</button>}
          
          </>
      );
};

export default Button;