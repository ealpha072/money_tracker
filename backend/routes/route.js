import express from "express";
import User from "../models/user.js";
//import bcrypt from "bcryptjs";
const appRoute = express.Router();

appRoute.get("/", (req, res) => {
  res.send("<h1>Good morning Africa</h1>");
});

export default appRoute;
