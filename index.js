const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// server
const port = process.env.PORT || 8080;

//routes
const toursRoute = require("./routes/toursRoute");
const tourRoute = require("./routes/tourRoute");

app.use(express.json());
app.use(cors());

app.use("/api/v1/tours", toursRoute);
app.use("/api/v1/tour", tourRoute);

// database connection
mongoose
    .connect(
        "mongodb+srv://nafiz003:Nafiz%401199@cluster0.3t2vk.mongodb.net/tour-management?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log(`Database Connected!!!`);
    });

app.get("/", (req, res) => {
    res.send("Tour Management Server is Running!!!");
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
