"use client";

import { useState } from "react";
import FlightComponent from "./components/FlightComponent";
import HotelComponent from "./components/HotelComponent";
import { flightComponent, hotelComponent } from "@/utils/config";
import flight from "@/public/images/flight1.png";
import hotel from "@/public/images/hotel.png";

export default function Home() {
  const [componentNowState, setComponentNowState] = useState(flightComponent);
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
  if (componentNowState === flightComponent)
    componentNow = (
      <FlightComponent
        changeComponent={changeComponentNow}
        componentNowState={componentNowState}
      />
    );
  else if (componentNowState === hotelComponent)
    componentNow = (
      <HotelComponent
        changeComponent={changeComponentNow}
        componentNowState={componentNowState}
      />
    );
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
        {componentNow}
      </div>
    </main>
  );

  // componentNow;
}
