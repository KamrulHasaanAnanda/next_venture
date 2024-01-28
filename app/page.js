"use client";

import { useState } from "react";
import FlightComponent from "./components/FlightComponent";
import HotelComponent from "./components/HotelComponent";
import { flightComponent, hotelComponent } from "@/utils/config";
import flight from "@/public/images/flight1.png";
import hotel from "@/public/images/hotel.png";

export default function Home() {
  const [componentNowState, setComponentNowState] = useState(flightComponent);

  const radioOptions = [
    { id: "hotel", label: "Hotel", value: hotelComponent },
    { id: "flight", label: "Flight", value: flightComponent },
  ];

  let changeComponentNow = (value) => {
    // console.log("value :>> ", value);
    if (value === flightComponent) {
      setComponentNowState(flightComponent);
    } else {
      console.log("value :>> ", value);

      setComponentNowState(hotelComponent);
    }
  };

  let componentNow = "";
  if (componentNowState === flightComponent) componentNow = <FlightComponent />;
  else if (componentNowState === hotelComponent)
    componentNow = <HotelComponent />;
  return (
    <main
      className="flex min-h-screen flex-col items-center sm:bg-contain justify-center p-5 md:p-24 bg-no-repeat bg-right xl:bg-auto lg:bg-auto"
      style={{
        backgroundImage: `url(${
          componentNowState === hotelComponent ? hotel.src : flight?.src
        })`,
      }}
    >
      <div className="flex flex-col items-start justify-center lg:w-full xl:w-2/3 gap-6">
        <h1 className="text-5xl leading-10 font-medium">
          Book your Flight and Hotel in one place
        </h1>
        <div className="filter-card w-full p-3">
          <div className="flex gap-2">
            <div className="flex gap-2 items-center ">
              <input
                type="radio"
                id="hotel"
                checked={componentNowState === hotelComponent}
                name="componentSelection"
                value={hotelComponent}
                onChange={(e) => {
                  changeComponentNow(e.target.value);
                }}
              />
              <h5>Hotel</h5>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="radio"
                id="Flight"
                name="componentSelection"
                onChange={(e) => {
                  changeComponentNow(e.target.value);
                }}
                checked={componentNowState === flightComponent}
                value={flightComponent}
              />
              <h5>Flight</h5>
            </div>
          </div>

          {componentNow}
        </div>
      </div>
    </main>
  );

  // componentNow;
}
