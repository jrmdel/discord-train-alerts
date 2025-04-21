const station1Fixture = {
  station: "TOULOUSE MATABIAU",
  time: {
    hours: 22,
    minutes: 20,
  },
  country: "France",
  id: "8761100",
  dateTimeInISO: "2024-05-27T22:20:00",
  geocoordinates: {
    lon: 1.45361,
    lat: 43.611113,
  },
};
const station1FormattedFixture = "TOULOUSE MATABIAU on 27/05/2024 at 22:20:00";

const station2Fixture = {
  station: "PARIS AUSTERLITZ",
  time: {
    hours: 7,
    minutes: 9,
  },
  country: "France",
  id: "8754700",
  dateTimeInISO: "2024-05-28T07:09:00",
  geocoordinates: {
    lon: 2.366392,
    lat: 48.841387,
  },
};
const station2FormattedFixture = "PARIS AUSTERLITZ on 28/05/2024 at 07:09:00";

const pricesWithOneElementFixture = [
  {
    type: "Tarif PASS EURAIL INTERRAIL ",
    amount: 12,
    reservationFee: 10,
    bookingFeeToPay: 2,
    bookingFeeVAT: 0.35,
    bookingFeeExclVAT: 1.65,
    bookingFeeAmount: 2,
    bookingFeeDiscountPercentage: 0,
    bookingFeeDiscountAmount: 0,
    availabilityTag: "High",
    serviceCode: 1,
    originalReservationFeeInEUR: 10,
    reservationBookingFeeDiscountPercentage: 0,
    reservationBookingFeeDiscountAmount: 0,
    reservationFeeToPay: 10,
    class: "2",
  },
];
const pricesWithOneElementFormattedFixture = ["Tarif PASS EURAIL INTERRAIL - 12€ (2nd class)"];

const pricesWithTwoElementsFixture = [
  {
    type: "Pass - Seat 2nd class",
    amount: 16.9,
    reservationFee: 14.9,
    bookingFeeToPay: 2,
    bookingFeeVAT: 0.35,
    bookingFeeExclVAT: 1.65,
    bookingFeeAmount: 2,
    bookingFeeDiscountPercentage: 0,
    bookingFeeDiscountAmount: 0,
    availabilityTag: "High",
    serviceCode: 1,
    originalReservationFeeInEUR: 14.9,
    reservationBookingFeeDiscountPercentage: 0,
    reservationBookingFeeDiscountAmount: 0,
    reservationFeeToPay: 14.9,
    class: "2",
  },
  {
    type: "Pass - Sleeper 1 person",
    amount: 311.9,
    reservationFee: 309.9,
    bookingFeeToPay: 2,
    bookingFeeVAT: 0.35,
    bookingFeeExclVAT: 1.65,
    bookingFeeAmount: 2,
    bookingFeeDiscountPercentage: 0,
    bookingFeeDiscountAmount: 0,
    availabilityTag: "High",
    serviceCode: 2,
    originalReservationFeeInEUR: 309.9,
    reservationBookingFeeDiscountPercentage: 0,
    reservationBookingFeeDiscountAmount: 0,
    reservationFeeToPay: 309.9,
    class: "2",
  },
];
const pricesWithTwoElementsFormattedFixture = [
  "Pass - Seat 2nd class - 16.9€ (2nd class)",
  "Pass - Sleeper 1 person - 311.9€ (2nd class)",
];

const reservationDataWithWarningFixture = {
  warningInfo: {
    warningCode: "W0230",
    warningDescription: "No result from bookingsystem",
  },
  error: {},
};
const parsedWarningFixture = "No result from bookingsystem";

const reservationDataWithErrorAndWarningFixture = {
  warningInfo: {
    warningCode: "W0230",
    warningDescription: "No result from bookingsystem",
  },
  error: {
    errorDescription: "Some descriptive error",
  },
};
const parsedErrorAndWarningFixture = "No result from bookingsystem / Some descriptive error";

module.exports = {
  station1Fixture,
  station1FormattedFixture,
  station2Fixture,
  station2FormattedFixture,
  pricesWithOneElementFixture,
  pricesWithOneElementFormattedFixture,
  pricesWithTwoElementsFixture,
  pricesWithTwoElementsFormattedFixture,
  reservationDataWithWarningFixture,
  parsedWarningFixture,
  reservationDataWithErrorAndWarningFixture,
  parsedErrorAndWarningFixture,
};
