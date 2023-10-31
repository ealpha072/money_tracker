import express from "express";
import Account from "../models/Account.js";
import bcrypt from "bcryptjs";
import logger from "../utils/logger.js";

const accountRoute = express.Router();

accountRoute.get("/", (req, res) => {
  res.send("<h1>This route works</h1>");
});

accountRoute.get("/add", async (req, res, next) => {
    const {id, email, account_details} = req.body
    try {
        const newAccount = new Account({id, email, account_details})
        const savedAccount = await newAccount.save()
        res.status(201).json({message:"Account addedd successfully"})
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
})



export default accountRoute