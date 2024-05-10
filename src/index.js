const express = require("express");
const app = express();
const workerRouter = require("./routers/signup_workers");
const routes = require("./routers/signupCustomer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const book_service = require("./routers/book-services");
require("./db/mongoose");
require("dotenv").config();
const bookingService=require("./routers/booking-service")
const cors = require('cors');
// Creating Express App

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.use(workerRouter);
app.use(book_service);
app.use(bookingService);
const port = process.env.port || 5000;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(port, () => {
	console.log("Server is up on the port " + port);
});

// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import routes from "./routers/signupCustomer.js";
// import workerRouter from "./routers/signup_workers.js";
// import book_service from "./routers/book-services.js";
// import bookingService from "./routers/booking-service.js";
// import "./db/mongoose.js";

// dotenv.config();

// const app = express();

// // Creating Express App
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(routes);
// app.use(workerRouter);
// app.use(book_service);
// app.use(bookingService);

// const port = process.env.port || 5000;

// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

// app.listen(port, () => {
//     console.log("Server is up on the port " + port);
// });
