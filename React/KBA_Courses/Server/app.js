import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from '../Server/routes/routes.js';
import auth from './routes/authroute.js';
import cookieParser from 'cookie-parser';
// const { mongoose } = require("mongoose");

// const cors = require("cors");
// const routes = require("./routes/routes").default;
// const auth = require('./routes/auth')
// const cookieParser = require('cookie-parser')

const app = express();

app.use(
  cors({ 
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/", router);
app.use("/", auth)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/kba_courses");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});