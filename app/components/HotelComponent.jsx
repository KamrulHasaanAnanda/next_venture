"use client";
import React, { useCallback, useState } from "react";
import hotel from "@/public/images/hotel.png";
import { flightComponent, hotelComponent, validateForm } from "@/utils/config";
import toast from "react-hot-toast";

function HotelComponent({ changeComponent, componentNowState }) {
  const [parameters, setparameters] = useState({
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    children: "",
    city: "",
    rooms: "",
  });

  const radioOptions = [
    { id: "hotel", label: "Hotel", value: hotelComponent },
    { id: "flight", label: "Flight", value: flightComponent },
  ];

  const inputOptions = [
    { name: "checkInDate", placeholder: "Check-In Date", type: "text" },
    { name: "checkOutDate", placeholder: "Check-Out Date", type: "text" },
    { name: "city", placeholder: "City", type: "text" },
    { name: "rooms", placeholder: "Number of Rooms", type: "number" },
    { name: "adults", placeholder: "Number of Adults", type: "number" },
    { name: "children", placeholder: "Number of Children", type: "number" },
    // Add other input types as needed
  ];

  const handleFocus = useCallback((e) => {
    if (e.target.name === "checkInDate" || e.target.name === "checkOutDate") {
      e.target.type = "date";
    }
  }, []);

  const handleBlur = useCallback((e) => {
    if (e.target.name === "checkInDate" || e.target.name === "checkOutDate") {
      e.target.type = "text";
    }
  }, []);

  const handleRadioChange = (value) => changeComponent(value);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setparameters((prevParams) => ({ ...prevParams, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    const validationErrors = validateForm(parameters);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitting form with parameters:", parameters);
    } else {
      console.error("Validation errors:", validationErrors);
      for (const key in validationErrors) {
        if (validationErrors.hasOwnProperty(key)) {
          //   console.log(`${key}: ${validationErrors[key]}`);
          toast.error(`${key}: ${validationErrors[key]}`);
        }
      }
    }
  };
  return (
    <main
      className="flex min-h-screen flex-col items-center sm:bg-contain justify-center p-5 md:p-24 bg-no-repeat bg-right xl:bg-auto lg:bg-auto"
      style={{ backgroundImage: `url(${hotel.src})` }}
    >
      <div className="flex flex-col items-start justify-center lg:w-full xl:w-2/3 gap-6">
        <h1 className="text-5xl leading-10 font-medium">
          Book your Flight and Hotel in one place
        </h1>
        <div className="filter-card w-full p-3">
          <div className="flex gap-2">
            {radioOptions.map((option) => (
              <div key={option.id} className="flex gap-2 items-center">
                <input
                  type="radio"
                  id={option.id}
                  name="componentSelection"
                  value={option.value}
                  checked={componentNowState === option.value}
                  onChange={() => handleRadioChange(option.value)}
                />
                <h5>{option.label}</h5>
              </div>
            ))}
          </div>
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
            Search for Hotel
          </button>
        </div>
      </div>
    </main>
  );
}

export default HotelComponent;
