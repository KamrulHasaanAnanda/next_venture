import React from "react";
import hotelImage from "@/public/images/hotelImage.jpeg";
import Image from "next/image";

function Search() {
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

      <div className="grid grid-cols-4 gap-4 mt-10">
        {/* Card 1 */}

        <div className="border border-solid card-search w-12">
          <Image src={hotelImage} alt="hotel image" />
          <div className="p-4 card-search ">
            <h5 className="card-title">Regional Hotel</h5>
            <p className="card-p mt-2">Cox’s Bazar, Chittagong</p>
            <p className="card-price mt-2">$ 24.50</p>
          </div>
        </div>
        <div className="border border-solid card-search w-12">
          <Image src={hotelImage} alt="hotel image" />
          <div className="p-4 card-search ">
            <h5 className="card-title">Regional Hotel</h5>
            <p className="card-p mt-2">Cox’s Bazar, Chittagong</p>
            <p className="card-price mt-2">$ 24.50</p>
          </div>
        </div>

        <div className="border border-solid card-search w-12">
          <Image src={hotelImage} alt="hotel image" />
          <div className="p-4 card-search ">
            <h5 className="card-title">Regional Hotel</h5>
            <p className="card-p mt-2">Cox’s Bazar, Chittagong</p>
            <p className="card-price mt-2">$ 24.50</p>
          </div>
        </div>
        <div className="border border-solid card-search w-12">
          <Image src={hotelImage} alt="hotel image" />
          <div className="p-4 card-search ">
            <h5 className="card-title">Regional Hotel</h5>
            <p className="card-p mt-2">Cox’s Bazar, Chittagong</p>
            <p className="card-price mt-2">$ 24.50</p>
          </div>
        </div>
        <div className="border border-solid card-search w-12">
          <Image src={hotelImage} alt="hotel image" />
          <div className="p-4 card-search ">
            <h5 className="card-title">Regional Hotel</h5>
            <p className="card-p mt-2">Cox’s Bazar, Chittagong</p>
            <p className="card-price mt-2">$ 24.50</p>
          </div>
        </div>
        <div className="border border-solid card-search w-12">
          <Image src={hotelImage} alt="hotel image" />
          <div className="p-4 card-search ">
            <h5 className="card-title">Regional Hotel</h5>
            <p className="card-p mt-2">Cox’s Bazar, Chittagong</p>
            <p className="card-price mt-2">$ 24.50</p>
          </div>
        </div>

        {/* More cards can be added as needed */}
      </div>
    </div>
  );
}

export default Search;
