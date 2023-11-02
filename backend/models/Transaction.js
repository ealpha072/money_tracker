import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require: true
    },
    from: {type: String, require:true},
    to:{type: String, require:true},
    note:String,
    amount:String,
    date:Date
})

const Transaction =  mongoose.model("transactions", transactionSchema)
export default Transaction