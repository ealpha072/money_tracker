import express from "express";
import Transaction from "../models/Transaction.js";
import logger from "../utils/logger.js";

const transactRoute = express.Router()

transactRoute.post("/transfer", async(req, res, next) => {
    const {user_id, transactionType, from, to, note, amount, date} = req.body
    try {
        const newTransaction = new Transaction({user_id, transactionType, from, to, note, amount, date})
        const savedTransaction = await newTransaction.save()
        res.status(201).json({message: "Transaction added successful", transactionDetails:savedTransaction})
    } catch (error) {
        logger.error(error)
        next(error)
    }
})


export default transactRoute