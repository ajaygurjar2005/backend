const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
