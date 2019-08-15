let express = require("express");
const Cities = require("../models/cities");

const router = express.Router();

router.get("/", (err, res) => {
  Cities.retrieveAll((req, cities) => {
    if (err.error) {
      console.log(err);
      return res.json(err);
    }
    console.log(cities);
    return res.json(cities);
  });
});
router.post("/", (req, res) => {
  let city = req.body.city;
  Cities.insert(city, function(err, result) {
    if (err) return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
