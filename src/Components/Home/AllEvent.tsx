import react from "react";

const AllEvent = () => {
   
      const data = [
            {

            },
            {

            },
            {}
      ]
    
  return (
    <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
      {data.map((d) =>
            <div  className='allEvent'>
            <div  className="card  glass lg:h-76 h-full relative">
              <figure>
                <img
                  className="w-full h-[250px]"
                  src="/assets/picture/gallery2.png"
                  alt="car!"
                />
              </figure>
              <div className="p-4  ">
                <h2 className="card-title">জাতীয় শিশু দিবস</h2>
              </div>
              <button className="bg-red-500 mt-3 text-white px-6 py-2 border-none rounded-md">Read More</button>
            </div>
    
            {/* <div className="bg-white px-10 py-3 w-44 opacity-0 goEvent absolute top-[199px] left-[120px] text-black  font-medium rounded-lg">
              <p>View Details</p>
            </div>
            <div className="bg-white opacity-0 goEvent  p-3 w-1 absolute top-[232px] left-[197px] translate-x-30  rotate-45"></div> */}
          </div>

      )}
      
    
    </div>
  );
};

export default AllEvent;
