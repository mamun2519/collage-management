import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [event, setEvent] = useState<any>({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/v1/event/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data.event));
  }, []);

  return (
    <div className="my-20 lg:w-3/4 w-full   mx-auto">
      <div
        className="card  w-full  bg-base-100 border
       shadow-md p-5"
      >
        <div className="car">
          <figure>
            <img src={event?.picture?.url} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{event?.title}</h2>
            <p>{event?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
