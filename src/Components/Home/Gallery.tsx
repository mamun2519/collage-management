import React , {useContext} from 'react';
import Marquee from 'react-fast-marquee';
import { ThemeContext } from "../../App";
const Gallery = () => {
      const { theme, toggleTheme } = useContext<any>(ThemeContext);
      return (
            <div className='my-40 max-w-7xl m-auto px-3'>
                  <div className="w-max mx-auto">
      
      <div className={`border-b-[3px] rounded-full ${theme == "light"? "border-[#2374e1] ": "border-[#e4e6eb] text-[#e4e6eb]"}`}>
      <h1 className="text-4xl pb-2 text-center mt-10 px-12  font-medium uppercase">Gallery</h1>
      </div>

      </div>
  
                  <div className="mt-10">
                  <Marquee gradient={false} speed={30}>
                  <div className=' grid grid-cols-4 gap-10 px-4 py-4'>
                        <div className='w-[350px] border p-2 rounded-lg shadow-md'>
                              <img className='h-[300px] rounded-md' src="/assets/picture/gallery2.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md'  src="/assets/picture/gallery3.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md' src="/assets/picture/gallery4.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md' src="/assets/picture/gallery5.png" alt="" />
                        </div>
                  </div>
                  <div className=' grid grid-cols-4 gap-10 px-4 py-4'>
                        <div className='w-[350px] border p-2 rounded-lg shadow-md'>
                              <img className='h-[300px] rounded-md' src="/assets/picture/gallery2.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md'  src="/assets/picture/gallery3.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md' src="/assets/picture/gallery4.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md' src="/assets/picture/gallery5.png" alt="" />
                        </div>
                  </div>
                  
                  </Marquee>

                  </div>
                
            </div>
      );
};

export default Gallery;