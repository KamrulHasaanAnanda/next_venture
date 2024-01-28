import { flightComponent, hotelComponent } from "@/utils/config";
import React from "react";
import flight from "@/public/images/flight1.png";

function FlightComponent({ changeComponent, componentNowState }) {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center  bg-auto p-5 md:p-24 bg-no-repeat sm:bg-cover  xl:bg-right 2xl:bg-right"
      style={{ backgroundImage: `url(${flight.src})` }}
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
                  changeComponent(e.target.value);
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
                  changeComponent(e.target.value);
                }}
                checked={componentNowState === flightComponent}
                value={flightComponent}
              />
              <h5>Flight</h5>
            </div>
          </div>
          <div className="mt-4 flex gap-3 flex-wrap">
            <input
              type="text"
              className="input-update"
              placeholder="Departure City"
            />
            <input
              type="text"
              className="input-update"
              placeholder="Departure City"
            />
            <input
              type="date"
              className="input-update"
              placeholder="Departure Date"
            />

            <input
              type="text"
              className="input-update"
              placeholder="Return Date"
            />
            <input
              type="number"
              className="input-update"
              placeholder="Number of Adults"
            />
            <input
              type="number"
              className="input-update"
              placeholder="Number of Children"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default FlightComponent;