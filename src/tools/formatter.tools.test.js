const {
  station1Fixture,
  station2Fixture,
  station1FormattedFixture,
  station2FormattedFixture,
  pricesWithOneElementFixture,
  pricesWithOneElementFormattedFixture,
  pricesWithTwoElementsFormattedFixture,
  pricesWithTwoElementsFixture,
  reservationDataWithWarningFixture,
  parsedWarningFixture,
  reservationDataWithErrorAndWarningFixture,
  parsedErrorAndWarningFixture,
} = require("../../test/fixtures/tools.fixtures");
const {
  extractStationNameTime,
  extractPrices,
  parseReservationData,
} = require("./formatter.tools");

describe("formatter tools", () => {
  describe("extractStationNameTime", () => {
    it("should format with name, date and time", () => {
      const resultA = extractStationNameTime(station1Fixture);
      const resultB = extractStationNameTime(station2Fixture);

      expect(resultA).toEqual(station1FormattedFixture);
      expect(resultB).toEqual(station2FormattedFixture);
    });

    it("should return default value when input is empty", () => {
      const resultA = extractStationNameTime({});
      const resultB = extractStationNameTime(undefined);
      const resultC = extractStationNameTime(null);

      expect(resultA).toEqual("Unknown station");
      expect(resultB).toEqual("Unknown station");
      expect(resultC).toEqual("Unknown station");
    });
  });

  describe("extractPrices", () => {
    it("should return an array with formatted prices", () => {
      const resultA = extractPrices(pricesWithOneElementFixture);
      const resultB = extractPrices(pricesWithTwoElementsFixture);

      expect(resultA).toEqual(pricesWithOneElementFormattedFixture);
      expect(resultB).toEqual(pricesWithTwoElementsFormattedFixture);
    });

    it("should return an empty array if prices is undefined, null or empty", () => {
      const resultA = extractPrices(undefined);
      const resultB = extractPrices(null);
      const resultC = extractPrices([]);

      expect(resultA).toEqual([]);
      expect(resultB).toEqual([]);
      expect(resultC).toEqual([]);
    });
  });

  describe("parseReservationData", () => {
    it("should extract description from warning field", () => {
      const result = parseReservationData(reservationDataWithWarningFixture);

      expect(result).toEqual(parsedWarningFixture);
    });

    it("should extract both descriptions from warning and error fields", () => {
      const result = parseReservationData(reservationDataWithErrorAndWarningFixture);

      expect(result).toEqual(parsedErrorAndWarningFixture);
    });

    it("should return default value when data is empty", () => {
      const result = parseReservationData({});

      expect(result).toEqual("");
    });
  });
});
