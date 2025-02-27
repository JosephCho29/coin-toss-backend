const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  photo: { type: String, required: true },
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
