require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");;
const router = require("./router")
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        app.listen(process.env.PORT || 5000, () => {
            console.log("Server starts: ", process.env.PORT || 5000);
        });
    } catch (e) {
        console.log(e);
    }
}

start();