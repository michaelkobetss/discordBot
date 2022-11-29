module.exports = async (interaction, cache) => {
  const author = interaction.member.nickname;
  const listOfUsers = [...interaction.options.data[1].role.members.keys()]
  const text = interaction.options.data[0].value;

  try {
    await [...listOfUsers].map((user, index) => {
      setTimeout(() => {
        cache
          .get(user)
          .send(
            `${text}
        -------------------
        author: ${author}`
          )
          .catch((err) => {
            console.log(err);
          });

        console.log(`message sent to ${user}`);
      }, 6000 * index);
    });
  } catch (err) {
    throw new Error(`Something failed`);  
  } finally {
    interaction.reply(`Starting sending private messages. Text: ${text}`);
  }
};
