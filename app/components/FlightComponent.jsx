"use client";
import { flightComponent, hotelComponent } from "@/utils/config";
import React, { useState } from "react";

function FlightComponent({ changeComponent, componentNowState }) {
  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };
  return (
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
          type={inputType}
          className="input-update"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Departure Date"
        />

        <input
          type={inputType}
          className="input-update"
          onFocus={handleFocus}
          onBlur={handleBlur}
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

      <button className="search-btn">Search for Flight</button>
    </div>
  );
}

export default FlightComponent;
