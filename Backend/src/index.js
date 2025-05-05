const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("../src/db/connectDB");  
const app = express();
 
dotenv.config();
app.use(cors());
app.use(express.json());   

app.get("/", (req, res) => {
  res.send("backend learning");
});  

// connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is runing on this port 5000");
});
