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
