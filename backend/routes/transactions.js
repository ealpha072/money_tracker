import express from "express";
import Transaction from "../models/Transaction.js";
import logger from "../utils/logger.js";
import mongoose from "mongoose";


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

transactRoute.post("/getAll", async(req, res, next) => {
    const {userId, limit} = req.body
    try {
        const allTrans = await Transaction.find({user_id:userId}).sort({date:1}).limit(5)
        // const allTrans  = await Transaction.aggregate([
        //     {
        //         $match: { user_id: new mongoose.Types.ObjectId(userId) } // Filter documents by user_id
        //     }
        // ])
        res.status(200).json({transactions:allTrans})
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
})

export default transactRoute