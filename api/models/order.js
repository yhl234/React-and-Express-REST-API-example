const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  phone: {
    type: String,
    required: 'Phone is required',
  },
  time: {
    type: Date,
    required: 'Date is required',
    default: Date.now,
  },
  numOfPeople: {
    type: Number,
    required: 'Number of people is required',
  },
  email: {
    type: String,
    required: 'Email is required',
  },
});

module.exports = mongoose.model('Order', orderSchema);
