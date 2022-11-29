module.exports = (interaction) => {

  const timezone = Number (interaction.options.data[0].value) * 60 * 60;
  const year = interaction.options.data[1].value;
  const month = Number(interaction.options.data[2].value);
  const date = interaction.options.data[3].value;
  const hours = interaction.options.data[4].value;
  const minutes= interaction.options.data[5].value;
  const type= interaction.options.data[6].value;

  const generatedTimestamp = new Date (Date.UTC(year, month, date, hours, minutes, 00)).valueOf().toString().slice(0,-3)
  const timestampTimezone = Number(generatedTimestamp) - timezone

  console.log(timezone);
  console.log(generatedTimestamp);
  console.log(timestampTimezone);
  interaction.reply(`<t:${timestampTimezone }${type}>\`\`\`<t:${timestampTimezone }${type}>\`\`\` `);
  };