"use strict";

// Module
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

dotenv.config();

// Routing
const home = require("./src/routes/home");

const accessLogStream = require("./src/config/log");

// App setup
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// To solve the issue not read Data having other characters such as Korean or empty space properly
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogStream }));

app.use("/", home); // use, to register middleware

module.exports = app;