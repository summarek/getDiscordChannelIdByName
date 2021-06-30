const Discord = require("discord.js");
const client = new Discord.Client();

const getDiscordChannelIdByName = (channelName, clientName) =>
  JSON.parse(JSON.stringify(clientName.channels))
    ["cache"].map((e) => `${e.name}: ${e.id}`)
    .filter((e) => e.includes(channelName));

require("dotenv").config();

client.on("ready", () => {
  console.log(getDiscordChannelIdByName("general", client));
});

client.login(process.env.DISCORD_TOKEN);
