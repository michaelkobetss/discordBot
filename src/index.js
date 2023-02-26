require("dotenv").config();


const { TOKEN, CLIENT_ID, GUILD_ID, PS2_SERVICE_ID, ADMIN_USER_ID } =
  process.env;
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const Permissions = require("discord.js");
const rest = new REST({ version: "10" }).setToken(TOKEN);

// commands improted ====================================================
const commands = require("./commands/commands");
const updateGuild = require("./utils/updateGuild.js");
const ping = require("./commands/ping/ping.js");
const help = require("./commands/help/help.js");
const dmall = require("./commands/dmall/dmall.js");
const tip = require("./commands/tip/tip.js");
const tipsDB = require("./db/tipsDB.json");
const timestamp = require("./commands/timestamp/timestamp.js")
const utc = require("./commands/utc/utc.js")
const play = require("./commands/play/play")
// const create = require("./commands/sign-ups/create.js");

updateGuild(GUILD_ID, rest, Routes, CLIENT_ID, commands);

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.cache.forEach((e) =>
    updateGuild(e.id, rest, Routes, CLIENT_ID, commands)
  );
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    return ping(interaction);
  }

  if (interaction.commandName === "help") {
    return help(interaction, commands);
  }

  if (interaction.commandName === "play") {
    return play(interaction);
  }

  // if (interaction.commandName === "create") {
  //   return create(interaction);
  // }

  if (interaction.commandName === "tip") {
    return tip(interaction, tipsDB);
  }
  if (interaction.commandName === "utc") {
    return utc(interaction);
  }

  if (interaction.commandName === "timestamp") {
    return timestamp(interaction);
  }

  if (
    interaction.commandName === "dmall" &&
    interaction.member.permissions.has(
      Permissions.PermissionFlagsBits.BanMembers
    )
  ) {
    return dmall(interaction, client.users.cache);
  } else {
    return interaction.reply("not enough permissions");
  }
});

client.on("guildCreate", (guild) => {
  updateGuild(guild.id, rest, Routes, CLIENT_ID, commands);
});

client.login(TOKEN);
