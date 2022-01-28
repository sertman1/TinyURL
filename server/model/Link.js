const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  originalLink: { type: String, required: true},
  shortenedLink: { type: String, required: true, unique: true}
});

const Link = mongoose.model("Link", LinkSchema);

module.exports = Link;
