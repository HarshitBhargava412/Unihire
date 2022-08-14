const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();
app.use(express.json());

app.use("/", router);

mongoose
  .connect(
      "mongodb+srv://Harshit0412:Harbhar123@hb0412.ftntw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(
    app.listen(4040, "localhost", () => {
      console.log("Server started");
      console.log("successfully connected");
    })
  )
  .catch((err) => console.log(err));
