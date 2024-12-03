const connect = require("./connect");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  connect.connectToServer();
  console.log(`Server Running on Port : ${PORT}`);
});
