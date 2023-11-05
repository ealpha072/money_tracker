import express from "express";
import Account from "../models/Account.js";
import bcrypt from "bcryptjs";
import logger from "../utils/logger.js";
import mongoose from "mongoose";

const accountRoute = express.Router();

accountRoute.get("/", (req, res) => {
  res.send("<h1>This route works</h1>");
});


accountRoute.post("/add", async (req, res, next) => {
    const {user_id,accountname, group, balance} = req.body
    try {
        //try find account
        const account = await Account.findOne({user_id:user_id, accountname:accountname, group:group})

        if(!account){
                const newAccount = new Account({
                user_id,
                accountname, 
                group, 
                balance
            })
            const savedAccount = await newAccount.save()
            res.status(201).json({message:"Account addedd successfully", account:savedAccount})
        }else{
            res.status(201).json({message:"Account details already exist"})
        }
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
})

accountRoute.post("/getAll", async(req, res, next) => {
    const {userId} = req.body
    
    try {
        const allAccounts  = await Account.aggregate([
            {
                $match: { user_id: new mongoose.Types.ObjectId(userId) } // Filter documents by user_id
            },
            {
                $group: {

                    _id: "$group",
                    accounts: {
                        $push:{
                            accountname:"$accountname",
                            balance: {$toDouble: "$balance"}
                        }
                    },
                    totalBalance: {$sum: {$toDouble: "$balance"}}
                }

            },{
                $sort: { _id: 1 }
            }
        ])
        res.status(200).json({accounts:allAccounts})
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
})

export default accountRoute