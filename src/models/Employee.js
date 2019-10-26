const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  empId: {
    type: String
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postalCode: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ["ALLOCATED", "FREE"],
    default: "FREE"
  },
  skills: {
    type: Array,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  email: {
    type: String,
    required: true
  },
  numOfProject: {
    type: Number,
    required: true,
    default: 0
  },
  reliability: {
    type: Number,
    required: true,
    default: 0
  },
  role: {
    type: String,
    required: true,
    enum: ["EMPLOYEE", "ADMIN", "GM"],
    default: "EMPLOYEE"
  },
  manager: {
    type: String
  }
});

module.exports = mongoose.model("Employee", employeeSchema);
