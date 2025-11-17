import mongoose from "mongoose";    

const EmployeeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  salary: Number,
  language: String,
  city: String,
  isManager: {type: Boolean, default: false}
});

export const Employee = mongoose.model('Employee', EmployeeSchema, 'employees');