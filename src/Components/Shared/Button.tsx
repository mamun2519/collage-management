import { signOut } from 'firebase/auth';
import React , {useContext} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsSun } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {ThemeContext} from "../../App"
import { MdDarkMode } from 'react-icons/md';
const Button = () => {
      const [user, loadings, error] = useAuthState(auth);
      const navigate = useNavigate()
      const {theme , toggleTheme} = useContext<any>(ThemeContext)
      console.log(theme)
      
      return (
            <>
            {theme === "light" ?
            <button onClick={()=>toggleTheme()} className='text-2xl px-4 mt-'><BsSun/></button>
            :
            <button onClick={()=>toggleTheme()} className='text-2xl px-4 mt-'><MdDarkMode/></button>
      }
            
            {!user   ?
            <button onClick={()=>navigate('/login')} className="bg-red-500 text-white   px-6 py-2 rounded-full">
            Get Started
          </button>
          :
         <button className="bg-red-500 text-white   px-6 py-2 rounded-full" onClick={()=>signOut(auth)}>SignOut</button>}
          
          </>
      );
};

export default Button;