import express from "express";
import Account from "../models/Account.js";
import bcrypt from "bcryptjs";
import logger from "../utils/logger.js";

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

export default accountRoute