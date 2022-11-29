function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = (int, db) => {
  int.reply(db[getRandomInt(db.length)].tip);
};
