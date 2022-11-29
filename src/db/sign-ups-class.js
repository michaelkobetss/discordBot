let db = require("./sign-ups-db.json");

module.exports = class SignUp {
  constructor(int, db) {
    this.int = int;
    this.db = db
  }
  test = () => {
    // console.log(this.int);
  };

  reply = () => {
    this.int.reply("test");
    // db.push({'message-id': '2'});
    
    // console.log(obj);
    // // console.log(db);
  };
};
