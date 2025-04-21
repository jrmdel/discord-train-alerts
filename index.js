const { Client } = require("discord.js");
const { getReservationData, getTimetables } = require("./src/services/interrail-api.service");

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.login(process.env.DISCORD_TOKEN);

const COMMAND_REGEX = new RegExp(/^(\/[a-z]*)/i);
const KNOWN_COMMANDS = ["/help", "/watch", "/unwatch", "/list"];

async function handleIncomingMessage(message = "") {
  const command = COMMAND_REGEX.exec(message)?.[0];
  if (!command || !KNOWN_COMMANDS.includes(command)) {
    return "This command is unknown. Try `/help` to get help";
  }
  if (command === "/help") {
    return "Here are the available commands:\n- `/watch`: to subscribe to a journey\n- `/list`: to list all watched journeys\n- `/unwatch [INDEX]`: to stop watching journey at INDEX in list";
  }
  if (command === "/watch") {
    const params = message.match(/(?<=\/watch.?\s)(.*)/)[0];
    const result = await getTimetables(params);
    // const journey = JSON.parse(message.match(/(?<=\/watch.?\s)(.*)/)[0]);
    // const result = getReservationData(journey);

    return result;
  }
  return "I know this one!";
}

client.on("messageCreate", async (message) => {
  if (message.author.bot) {
    return;
  }
  const content = message.content.trim();
  console.log("-->", content);
  const response = await handleIncomingMessage(content);
  console.log("\t<--", response?.split("\n")?.join("\n\t    "));
  message.channel.send(response);
});
