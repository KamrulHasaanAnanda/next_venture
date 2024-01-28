"use client";
import {
  flightComponent,
  hotelComponent,
  validateFlightForm,
  validateForm,
} from "@/utils/config";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

function FlightComponent() {
  const [inputType, setInputType] = useState("text");
  const [parameters, setparameters] = useState({
    departure_city: "",
    arrival_city: "",

    departure_date: "",
    return_date: "",
    adults: "",
    children: "",
  });
  const inputOptions = [
    { name: "departure_city", placeholder: "Departure city", type: "text" },
    { name: "arrival_city", placeholder: "Arrival city", type: "text" },
    { name: "departure_date", placeholder: "Departure date", type: "text" },
    { name: "return_date", placeholder: "Return date", type: "text" },
    { name: "adults", placeholder: "Number of Adults", type: "number" },
    { name: "children", placeholder: "Number of Children", type: "number" },
  ];

  const handleFocus = useCallback((e) => {
    if (e.target.name === "departure_date" || e.target.name === "return_date") {
      e.target.type = "date";
    }
  }, []);

  const handleBlur = useCallback((e) => {
    if (e.target.name === "departure_date" || e.target.name === "return_date") {
      e.target.type = "text";
    }
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setparameters((prevParams) => ({ ...prevParams, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    const validationErrors = validateFlightForm(parameters);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitting form with parameters:", parameters);
    } else {
      for (const key in validationErrors) {
        if (validationErrors.hasOwnProperty(key)) {
          //   console.log(`${key}: ${validationErrors[key]}`);
          toast.error(`${key}: ${validationErrors[key]}`);
        }
      }
    }
  };
  return (
    <>
      <div className="mt-4 flex gap-3 flex-wrap">
        {inputOptions.map((input) => (
          <input
            key={input.name}
            type={input.type}
            name={input.name}
            value={parameters[input.name]}
            className="input-update"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={input.placeholder}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <button className="search-btn" onClick={handleSubmit}>
        Search for Flight
      </button>
    </>
  );
}

export default FlightComponent;
