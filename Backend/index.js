const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend learning");
});
app.get("/login", (req, res) => {
  res.send("login successfull!");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is runing on this port 5000");
});
