const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
        custId:String,
        invoiceNo:String,
        billNo:Number,
        date:Date,
        rate:Number,
        weight:Number,
        amount:Number
},{timestamps:true})
const UserModel=mongoose.model("Userinfo",UserDataSchema);
module.exports=UserModel;