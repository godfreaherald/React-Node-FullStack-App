const db = require("../database");

class Cities {
  static retrieveAll(callback) {
    db.query("SELECT city_name FROM cities", (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(city, callback) {
    db.query(
      "INSERT into cities(city_name) values($1) ",
      [city],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Cities;
