import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutFrom from "./CheckoutFrom";
const stripePromise = loadStripe(
  "pk_test_51L1nmNCGpaTt0RU8npNSNITrjLTAUDjwjX275RD6RDk5SGoYi1H1zLKxAis8OFp4C0PxQBT2L5c0L0VsTI9ewqGl00dT2UHEXy"
);
const Payment = () => {
  const [clientSecret, setStripeClientSecret] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://collage-management-backend.vercel.app/v1/payment/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("UserToken")}`,
        },
        body: JSON.stringify({ price: 500 }),
      }
    )
      .then((res) => res.json())
      .then((data) => setStripeClientSecret(data.clientSecrets));
  }, []);
  const appearance = {
    theme: "stripe",
  };

  const options: any = {
    clientSecret,
    appearance,
  };

  return (
    <div className="my-10 max-w-7xl m-auto px-3">
      <div className="card w-full bg-base-100 border  pb-5">
        <div className="bg-[#166364] h-16 flex items-center  justify-between px-8">
          <div>
            <span
              onClick={() => navigate("/onlineAdmission/personalInfromation")}
              className="bg-white text-black px-6 py-1  rounded-lg"
            >
              Back
            </span>
          </div>
        </div>
        <div className="w-max mx-auto">
          <div className="border-b-2 rounded-full border-[#2374e1] ">
            <h1 className="text-xl pb-2 text-center mt-10 lg:px-12 px-6 font-medium uppercase">
              Payment Now
            </h1>
          </div>
        </div>

        <div className="mt-10">
          <div data-aos="fade-up" data-aos-duration="1000" className="">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutFrom />
              </Elements>
            )}
          </div>
        </div>

        {/* <div className=" flex justify-center">
                <button className="bg-red-500 text-white px-8 rounded-lg py-2">Payment Now</button>
      
              </div> */}
      </div>
    </div>
  );
};

export default Payment;
