const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
let db = require("./database");

const ENV = process.env.NODE_ENV;
const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/cities", require("./api/cities"));
app.use("api/weather", require("./api/weather"));
app.listen(port, () => {
  console.log(`App running on port ${port} !`);
});

db.query("SELECT NOW()", (err, res) => {
  if (err.error) return console.log(err.error);
  console.log(`PostgresQL connected : ${res[0].now}`);
});

module.exports = app;
