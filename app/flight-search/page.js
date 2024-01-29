import React from "react";
import hotelImage from "@/public/images/hotelImage.jpeg";
import Image from "next/image";
import apiService from "../services/ApiSearvices";

async function Search({ searchParams }) {
  // const router = useRouter();
  //   console.log("props :>> ", searchParams);
  let getFlights = await apiService.getFlight(searchParams);
  console.log("getHotels :>> ", getFlights?.aggregation);

  let hotels = "";
  if (getFlights?.aggregation?.airlines?.length > 0) {
    hotels = getFlights?.aggregation?.airlines?.map((flights) => {
      // console.log("flights :>> ", flights);
      return (
        <div className="border card-search w-12" key={flights?.id}>
          <Image
            src={flights?.logoUrl || hotelImage}
            width={250}
            height={200}
            alt="hotel image"
          />
          <div className="p-4 card-search ">
            <h5 className="card-title">{flights?.name}</h5>
            {/* <p >Cox’s Bazar, Chittagong</p> */}

            {/* <p className="card-price mt-2">$ 24.50</p> */}
          </div>
        </div>
      );
    });
  }

  return (
    <div className="p-5 md:p-24 ">
      <div className="flex justify-between items-center">
        <h4 className="text-3xl text-white">Flight Listing</h4>
        <select className="block appearance-none w-[200px] border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 text-black">
          <option value="">Filters</option>
          <option value="option1">Filter by Price</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      {getFlights?.aggregation?.airlines?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 mt-8">
          {hotels}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-600 text-lg">No data found</p>
        </div>
      )}
    </div>
  );
}

export default Search;
