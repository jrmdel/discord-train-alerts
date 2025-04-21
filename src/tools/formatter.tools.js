const classMapper = {
  1: "1st class",
  2: "2nd class",
};

const numberEmoji = {
  1: ":one:",
  2: ":two:",
  3: ":three:",
  4: ":four:",
  5: ":five:",
  6: ":six:",
  7: ":seven:",
  8: ":eight:",
};

function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function extractStationNameTime(station = {}) {
  if (!station || isEmpty(station)) {
    return "Unknown station";
  }
  const name = station.station;
  const datetime = station.dateTimeInISO?.split("T");

  const date = datetime[0]?.split("-")?.reverse()?.join("/");
  const time = datetime[1];

  return `${name} on ${date} at ${time}`;
}

function extractPrices(prices = []) {
  return (prices ?? []).map((price) => {
    return `${price.type?.trim()} - ${price.amount}€ (${classMapper[price.class]})`;
  });
}

function parseReservationData(data = {}) {
  return (
    [data?.warningInfo?.warningDescription, data?.error?.errorDescription]
      .filter((v) => v)
      .join(" / ") ?? ""
  );
}

function formatLeg(leg = {}) {
  const { start, end, status, reservationData, prices } = leg;

  const startText = extractStationNameTime(start);
  const endText = extractStationNameTime(end);
  const pricesText = extractPrices(prices).join(", ") ?? " - ";
  const errorOrWarning = parseReservationData(reservationData);

  const result = [`From ${startText} to ${endText}`, `Status: ${status}`, `Prices: ${pricesText}`];
  if (errorOrWarning) {
    result.push(`Warning: ${errorOrWarning}`);
  }

  return result.join("\n");
}

function arrayToStringList(arr = []) {
  return arr.map((val, index) => `${numberEmoji[index + 1]} - ${val}`).join("\n");
}

module.exports = {
  extractStationNameTime,
  extractPrices,
  parseReservationData,
  formatLeg,
  arrayToStringList,
};
