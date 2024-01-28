export const flightComponent = "flightComponent";
export const hotelComponent = "hotelComponent";

export const validateForm = (parameters) => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const errors = {};

  if (parameters.checkInDate < today) {
    errors.checkInDate = "Check-in date should be today or later";
  }

  if (parameters.checkOutDate < today) {
    errors.checkOutDate = "Check-out date should be today or later";
  }

  if (parameters.checkInDate >= parameters.checkOutDate) {
    errors.checkOutDate = "Check-out date should be later than check-in date";
  }

  if (parameters.rooms <= 0) {
    errors.rooms = "Number of rooms should be greater than 0";
  }

  if (!parameters.city.trim()) {
    errors.city = "City is required";
  }

  return errors;
};

export const validateFlightForm = (flightParameters) => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const errors = {};

  if (!flightParameters.departure_city.trim()) {
    errors.departure_city = "Departure city is required";
  }

  if (!flightParameters.arrival_city.trim()) {
    errors.arrival_city = "Arrival city is required";
  }

  if (flightParameters.departure_date < today) {
    errors.departure_date = "Departure date should be today or later";
  }

  if (
    flightParameters.return_date &&
    flightParameters.return_date < flightParameters.departure_date
  ) {
    errors.return_date = "Return date should be later than departure date";
  }

  if (flightParameters.adults <= 0) {
    errors.adults = "Number of adults should be greater than 0";
  }

  if (flightParameters.children < 0) {
    errors.children = "Number of children should be 0 or greater";
  }

  return errors;
};
