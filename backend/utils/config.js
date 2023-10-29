import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

//Ealpha072
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

export default { PORT, URL };