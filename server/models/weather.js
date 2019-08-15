const request = require("request-promise");

const API_KEY = "9cc24598a33bfaa547dc22ca7bc25ba5";

class Weather {
  static retrieveByCity(city, callback) {
    request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`,
      json: true
    })
      .then(res => callback(res))
      .catch(err => {
        console.log(err);
        callback({ erro: "Could not react OpenWeatherMap API." });
      });
  }
}

module.exports = Weather;
