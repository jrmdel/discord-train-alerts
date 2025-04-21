const {
  extractStationNameTime,
  formatLeg,
  parseReservationData,
  arrayToStringList,
} = require("../tools/formatter.tools");
const axios = require("axios");
const { join } = require("path");

const traveller = JSON.parse(process.env.INTERRAIL_TRAVELLER_PAYLOAD);
const baseUrl = process.env.INTERRAIL_API_URL;

module.exports = {
  getTimetables: async function (params) {
    try {
      const apiUrl = join(baseUrl, "v2/timetable");
      const response = await axios.get(apiUrl, {
        params: Object.fromEntries(new URLSearchParams(params)),
      });
      const journeys = response.data;

      const formattedData = journeys.map((journey) =>
        journey?.legs
          ?.filter((leg) => leg.type !== "PLATFORM_CHANGE")
          ?.map((leg) => formatLeg(leg))
          ?.join("\n")
      );

      return arrayToStringList(formattedData);
    } catch (error) {
      console.error("getTimetables call failed", error.message);
      return "Error";
    }
  },
  getReservationData: async function (journey) {
    try {
      const apiUrl = join(baseUrl, "/v2/reservations-timetable");
      const body = {
        currency: "EUR",
        journey,
        travellers: [traveller],
      };

      const response = await axios.post(apiUrl, body);

      const legs = response.data?.legs?.filter((leg) => leg.type !== "PLATFORM_CHANGE");
      const formattedData = legs?.map((leg) => formatLeg(leg));

      return formattedData;
    } catch (error) {
      console.error("getReservationData call failed", error.message);
      return "Error";
    }
  },
};
