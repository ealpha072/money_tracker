import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import logger from "../utils/logger.js";

const appRoute = express.Router();

appRoute.get("/", (req, res) => {
  res.send("<h1>Good morning Africa</h1>");
});

appRoute.post("/signup", async (req, res, next) => {
    //console.log(req.body)
    const {email, password} = req.body
  	try {
		//see if user allready exists
		const user = await User.findOne({email:email})

		if(!user){
			//salting of password
			const saltRounds = 10
			const passwordHash = await bcrypt.hash(password, saltRounds)
			const newUser = new User({email, passwordHash})
			const savedUser = await newUser.save()
			res.status(201).json({message:"User registered successfully", user:savedUser})
		}else{
			res.status(400).json({message:"Email already taken"})
		}
  	} catch (error) {
        logger.error(error.message)
        next(error)
    }
})

appRoute.post('/login', async (req, res, next) => {
    const {email, password} = req.body
    //look for user
    try {
        const findUser = await User.findOne({email: email})
        let passwordMatch = findUser === null ? 
        false : 
        await bcrypt.compare(password, findUser.passwordHash)

        if(!(findUser && passwordMatch )){
            res.status(400).json({message:"Invalid email or password please try again"})
        }else{
            res.status(200).json({message: "Login successfull", user:findUser})
        }
    } catch (error) {
        logger.error(error.message)
        next(error)
    }

})

export default appRoute;
