"use client";
import { flightComponent, hotelComponent } from "@/utils/config";
import React, { useState } from "react";

function FlightComponent() {
  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };
  return (
    <>
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
    </>
  );
}

export default FlightComponent;
