const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  address: String,
  callStatus: {
    status: { type: String, enum: ['Connected', 'Not Connected'], default: 'Not Connected' },
    response: String
  },
  telecaller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
