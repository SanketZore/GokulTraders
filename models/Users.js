
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    companyName:String,
    companyAddress:String,
})

const CompanyModel=mongoose.model("company",UserSchema);
module.exports=CompanyModel;
