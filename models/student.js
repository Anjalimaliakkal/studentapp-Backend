const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
    "name": String,
    "rollNo": String,
    "admNo": String,
    "college": String
    }
)
let studentsmodel=mongoose.model("students",schema);
module.exports={studentsmodel}