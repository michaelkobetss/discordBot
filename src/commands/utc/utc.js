module.exports = (interaction) => {
  const today = new Date();
  interaction.reply(`*UTC time:* **${today.toLocaleTimeString("uk-UK", { timeZone: "UTC" })}**
*DEVICE time:* **<t:${today.valueOf().toString().slice(0, -3)}:T>**`);
};
