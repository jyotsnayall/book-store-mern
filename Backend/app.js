const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes.js");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books


mongoose
    .connect(
        `mongodb+srv://admin:${process.env.DB_PASS}@cluster0.8xovdsp.mongodb.net/bookStore?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));

