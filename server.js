const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const groceriesRoutes = require('./routes/groceries');

const connectDB = require('./DB/connection');

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(bodyParser.json());

app.use("/grocery", groceriesRoutes);

app.listen(8080, () => {
    // mongoose.createConnection(`mongodb+srv://sweetiehimanshu:xQaMJL42IuM4KbvN@cluster0.h5ukmh8.mongodb.net/?retryWrites=true&w=majority`);
    connectDB();
    console.log(`Server listening at port 8080`);
})