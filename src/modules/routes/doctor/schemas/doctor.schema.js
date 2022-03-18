const mongoose = require('mongoose');
const {getClients} = require('../../../../initializer/lib/loaders/database.loaders');

const conn = getClients().mongoInstance;

const doctorSchema = mongoose.Schema({
  firstName: { type: "string", required: true },

  lastName: { type: "string", required: true },

  cedule_number: { type: "string", required: true},

  speciality: { type: 'string', required: true},

  phone_number: { type: "string", required: true },

  email: { type: "string", required: true },

  password: { type: "string", required: true },

  locality: { type: "string", required: true },

  state: { type: "string", required: true },

  street_name: { type: "string", required: true },

  street_number: { type: "string", required: true },

  userName: { type: "string", required: true },
}, {versionKey: false});

const Doctor = conn.model("doctor", doctorSchema);

module.exports = { Doctor };
