import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    from: {type: String, require:true},
    to:{type: String, require:true},
    note:String,
    Date:Date
})

const Transaction =  mongoose.model("transactions", transactionSchema)
export default Transaction