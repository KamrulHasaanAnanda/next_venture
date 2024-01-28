"use client";
import React, { useCallback, useState } from "react";
import { validateForm } from "@/utils/config";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function HotelComponent() {
  const router = useRouter();
  const [parameters, setparameters] = useState({
    arrival_date: "",
    departure_date: "",
    adults: "",
    childrenAges: "",
    city: "",
    rooms: "",
    search_type: "city",
  });

  const inputOptions = [
    { name: "arrival_date", placeholder: "Check-In Date", type: "text" },
    { name: "departure_date", placeholder: "Check-Out Date", type: "text" },
    { name: "city", placeholder: "City", type: "text" },
    { name: "rooms", placeholder: "Number of Rooms", type: "number" },
    { name: "adults", placeholder: "Number of Adults", type: "number" },
    {
      name: "childrenAges",
      placeholder: "Number of children",
      type: "number",
    },
  ];

  const handleFocus = useCallback((e) => {
    if (
      e.target.name === "arrival_date" ||
      e.target.name === "departure_date"
    ) {
      e.target.type = "date";
    }
  }, []);

  const handleBlur = useCallback((e) => {
    if (
      e.target.name === "arrival_date" ||
      e.target.name === "departure_date"
    ) {
      e.target.type = "text";
    }
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setparameters((prevParams) => ({ ...prevParams, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    const validationErrors = validateForm(parameters);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitting form with parameters:", parameters);
      const queryString = new URLSearchParams(parameters).toString();
      const url = `/search?${queryString}`;
      console.log(url);

      //   router.push({
      //     pathname: "/search",
      //     query: queryString,
      //   });

      router.push(url);
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
        Search for Hotel
      </button>
    </>
  );
}

export default HotelComponent;
