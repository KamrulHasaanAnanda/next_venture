"use client";

import { useState } from "react";
import FlightComponent from "./components/FlightComponent";
import HotelComponent from "./components/HotelComponent";
import { flightComponent, hotelComponent } from "@/utils/config";

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
  return componentNow;
}
