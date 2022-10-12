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
            <div className=' flex'>
            {theme === "light" ?<>
            <span className='px-4 border rounded-lg py-1 mt-1'>Light</span>
            <span onClick={()=>toggleTheme()} className='text-2xl px-3 mt-2'><BsSun/></span>
            </>
            :
            <>
            <span className='px-4 border rounded-lg py-1 mt-1'>Dark</span>
            <span onClick={()=>toggleTheme()} className='text-2xl px-3 mt-2'><MdDarkMode/></span>
            </>
      }
            
            {!user   ?
            <button onClick={()=>navigate('/login')} className="bg-red-500 text-white   px-6 py-2 rounded-full">
            Get Started
          </button>
          :
         <button className="bg-red-500 text-white   px-6 py-2 rounded-full" onClick={()=>signOut(auth)}>SignOut</button>}
          
          </div>
      );
};

export default Button;