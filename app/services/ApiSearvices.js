let apiService = {};
apiService.getHotels = async (data) => {
  let getDest =
    process.env.NEXT_PUBLIC_HOTEL_API +
    "hotels/searchDestination?query=" +
    data?.city;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RapidAPI,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RapidHOST,
    },
  };
  //   console.log("getDest :>> ", getDest);
  try {
    const response = await fetch(getDest, options);
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
        const response = await fetch(hotelUrl, options);
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

export default apiService;
