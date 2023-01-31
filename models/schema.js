const mongoose = require("mongoose")
const employeeSchema=new mongoose.Schema({
    name:String,
    age:Number,
    designation:String
})

const Employee=mongoose.model("employee",employeeSchema)
module.exports = Employee