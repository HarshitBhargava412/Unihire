const countryModel = require("./segments");

exports.getAllsegments = (req, res) => {
  countryModel.find().then((response) => {
    res.json({ data: response });
  });
};
