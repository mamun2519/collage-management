import React , {useState , useEffect} from 'react';
import { BsStopwatch } from 'react-icons/bs';

const AddNotice = () => {
      const [selected, setSelected] = useState<any>(false);
      const [dataDispaly, SetDataDisplay] = useState(false);
      const notice = [
            { title: "Higer Secondary Admission" },
            { title: "Bachelor of Busniness Studies (BBS)" },
            { title: "Bachelor of Science (BSC)" },
            { title: "Bachelor of Arts (BA)" },
            { title: "Bachelor of Busniness Administraion (BBA)" },
            { title: "Graduate Admission (Master's)" },
          ];
          const admissionRequestHendeler = (admissionName: string): void => {
            const click = notice.filter((classs) => classs.title === admissionName);
            setSelected(click[0]?.title);
            SetDataDisplay(true);
          };
      return (
            <div className='my-10 lg:w-3/4 w-full mx-auto'>
                   <div className="  grid  lg:grid-cols-3 grid-cols-2 gap-10">
        {notice.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-36 lg:w-80 shadow-md px-2 ${
              selected == ad.title ? "bg-red-500" : "bg-base-100"
            } `}
          >
            <div>
              <span
                className={`text-3xl  ${
                  selected == ad.title ? "text-white" : "text-red-500"
                }`}
              >
                <BsStopwatch />
              </span>
            </div>
            <div>
              <p
                className={`font-semibold uppercase mt-1 text-center ${
                  selected == ad.title ? "text-white" : "text-black"
                }`}
              >
                {ad.title}
              </p>
              <p
                className={`font-semibold text-sm mt-1 text-center ${
                  selected == ad.title ? "text-white" : "text-black"
                }`}
              >
               (Notce)
              </p>
            </div>
          </div>
        ))}
      </div>
                  
            </div>
      );
};

export default AddNotice;