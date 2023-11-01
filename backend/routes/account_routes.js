import express from "express";
import Account from "../models/Account.js";
import bcrypt from "bcryptjs";
import logger from "../utils/logger.js";

const accountRoute = express.Router();

accountRoute.get("/", (req, res) => {
  res.send("<h1>This route works</h1>");
});

// Body: {
//     user_id: '65413c6c50525108a4144613',
//     accountname: 'Savings Account',
//     group: 'Bank Account',
//     balance: '200000'
//   }
accountRoute.post("/add", async (req, res, next) => {
    const {user_id,accountname, group, balance} = req.body
    try {
        const newAccount = new Account({
            user_id,
            accountname, 
            group, 
            balance
        })
        const savedAccount = await newAccount.save()
        res.status(201).json({message:"Account addedd successfully", account:savedAccount})
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
})

export default accountRoute