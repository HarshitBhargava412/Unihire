const mongoose = require("mongoose");

const schema = mongoose.Schema;

const countrySchema = new schema({});

module.exports = mongoose.model("countryModel", countrySchema, "unihire");
