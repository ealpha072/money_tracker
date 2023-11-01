import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    accountname:{type: String, unique:true},
    group:String,
    balance: String
})

const Account = mongoose.model("Account_details", accountSchema)
export default Account