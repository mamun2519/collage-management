import react, { useState, useEffect , useContext} from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../App";
const EventDetails = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [event, setEvent] = useState<any>({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/v1/event/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data.event));
  }, []);

  return (
    <div className="my-20 lg:w-3/4 w-full   mx-auto px-3">
      <div
        className={`card  lg:w-3/4 mx-auto w-[280px]  border  shadow-md my-20 ${
          theme == "light" ? "bg-base-100" : "bg-[#242526] border-[#414343] text-[#e4e6eb]"}`}
      >
        <div className="car ">
          <figure>
            <img src={event?.picture?.url} alt="car!" />
          </figure>
          <div className="card-bo px-2 mt-5">
            <h2 className="card-title">{event?.title}</h2>
            <p className="">{event?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
