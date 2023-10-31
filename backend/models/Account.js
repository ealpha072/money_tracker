import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    email:String,
    account_details:{
        accountName:String,
        balance: Number
    }

})

const Account = mongoose.model("Account_details", accountSchema)
export default Account