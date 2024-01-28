let apiService = {};
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RapidAPI,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RapidHOST,
  },
};
apiService.getHotels = async (data) => {
  let getDest =
    process.env.NEXT_PUBLIC_HOTEL_API +
    "hotels/searchDestination?query=" +
    data?.city;
  //   console.log("getDest :>> ", getDest);
  try {
    const response = await fetch(getDest, options, { cache: "no-store" });
    const getDestId = await response.json();
    if (getDestId?.data?.length > 0) {
      let hotelUrl = `${process.env.NEXT_PUBLIC_HOTEL_API}hotels/searchHotels?dest_id=${getDestId?.data[0]?.dest_id}`;
      //   console.log("hotelUrl :>> ", hotelUrl);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          hotelUrl += `&${key}=${data[key]}`;
        }
      }
      try {
        const response = await fetch(hotelUrl, options, { cache: "no-store" });
        // console.log("response :>> ", response);
        const hotelResult = await response.json();
        // console.log("hotelResult", hotelResult);
        return hotelResult?.data;
      } catch (error) {
        console.error("hotel error", error);
      }
    }
    console.log("getDestId", getDestId);
  } catch (error) {
    console.error("getDestId", error);
  }
  //   console.log("getDest :>> ", getDest);
};

apiService.getFlight = async (data) => {
  let getFlightLocationUrlDeparture =
    process.env.NEXT_PUBLIC_HOTEL_API +
    "flights/searchDestination?query=" +
    data?.departure_city;

  let getFlightLocationUrlArrival =
    process.env.NEXT_PUBLIC_HOTEL_API +
    "flights/searchDestination?query=" +
    data?.arrival_city;

  //   console.log("getDest :>> ", getDest);
  try {
    const flightDepartureResponse = await fetch(
      getFlightLocationUrlDeparture,
      options
    );
    const getFlightLocationDeparture = await flightDepartureResponse.json();
    const flightArrivalResponse = await fetch(
      getFlightLocationUrlArrival,
      options,
      { cache: "no-store" }
    );
    const getFlightLocationArrival = await flightArrivalResponse.json();
    // console.log("getFlightLocationDeparture :>> ", getFlightLocationDeparture);
    // console.log("getFlightLocationArrival :>> ", getFlightLocationArrival);

    if (
      getFlightLocationDeparture?.data?.length > 0 &&
      getFlightLocationArrival?.data?.length > 0
    ) {
      let flightUrl = `${process.env.NEXT_PUBLIC_HOTEL_API}flights/searchFlights?fromId=${getFlightLocationDeparture?.data[0]?.id}&toId=${getFlightLocationArrival?.data[0]?.id}&departDate=${data?.departure_date}&adults=${data?.adults}`;
      //   console.log("hotelUrl :>> ", hotelUrl);

      try {
        const response = await fetch(flightUrl, options, { cache: "no-store" });
        // console.log("response :>> ", response);
        const flightResult = await response.json();
        // console.log("hotelResult", hotelResult);
        return flightResult?.data;
      } catch (error) {
        // console.error("hotel error", error);
      }
    }
    // console.log("getFlightLocation", getFlightLocation);
  } catch (error) {
    console.error("getFlightLocation error", error);
  }
};

export default apiService;
