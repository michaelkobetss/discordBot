module.exports = async (int, list) => {
    const commandsArr =  [];
    list.map((i) => {
        commandsArr.push(`\n**${i.name}:** ${i.description} `);
    });
  int.reply(commandsArr.toString())
};
