const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TripSchema = Schema({
  user_name: String,
  destination: String,
  description: String,
  pic_path: String
});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;
