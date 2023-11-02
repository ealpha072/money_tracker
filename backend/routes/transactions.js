import express from "express";
import Transaction from "../models/Transaction.js";
import logger from "../utils/logger.js";

const transactRoute = express.Router()

transactRoute.post("/transfer", async(req, res, next) => {
    res.status(200).json({message: "This works"})
})

export default transactRoute