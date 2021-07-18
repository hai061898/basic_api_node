const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./user/user.router");

app.use(express.json());
const port = process.env.DB_PORT || 4000;
app.use("/user", userRouter);
app.listen(port, () => {
    console.log("server up and running on PORT :", port);
  });
