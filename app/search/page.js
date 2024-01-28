import React from "react";
import hotelImage from "@/public/images/hotelImage.jpeg";
import Image from "next/image";
import apiService from "../services/ApiSearvices";

async function Search({ searchParams }) {
  // const router = useRouter();
  //   console.log("props :>> ", searchParams);
  let getHotels = await apiService.getHotels(searchParams);
  console.log("getHotels :>> ", getHotels?.hotels);

  let hotels = "";
  if (getHotels?.hotels?.length > 0) {
    hotels = getHotels.hotels.map((hotel) => {
      return (
        <div className="border card-search w-12" key={hotel?.id}>
          <Image
            src={
              hotel?.property?.photoUrls?.length > 0
                ? hotel?.property?.photoUrls[0]
                : hotelImage
            }
            width={250}
            height={200}
            alt="hotel image"
          />
          <div className="p-4 card-search ">
            <h5 className="card-title">{hotel?.property?.name}</h5>
            {/* <p >Cox’s Bazar, Chittagong</p> */}
            <div
              className="card-p mt-2"
              //   dangerouslySetInnerHTML={{ __html: hotel?.accessibilityLabel }}
            >
              {hotel?.accessibilityLabel}
            </div>

            {/* <p className="card-price mt-2">$ 24.50</p> */}
          </div>
        </div>
      );
    });
  }

  return (
    <div className="p-5 md:p-24 ">
      <div className="flex justify-between items-center">
        <h4 className="text-3xl text-white">Hotel Listing</h4>
        <select className="block appearance-none w-[200px] border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 text-black">
          <option value="">Filters</option>
          <option value="option1">Filter by Price</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 mt-8">
        {hotels}
      </div>
    </div>
  );
}

export default Search;
