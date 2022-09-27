import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
      const navigate = useNavigate()
      return (
            <button onClick={()=>navigate('/login')} className="bg-red-500 text-white  px-6 py-2 rounded-full">
            Get Started
          </button>
      );
};

export default Button;