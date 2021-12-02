"use strict";

// Module
const express = require("express");
const app = express();

// Routing
const home = require("./src/routes/home");

// App setup
app.set("views","./src/views");
app.set("view engine","ejs");

app.use("/", home); // use, to register middleware

module.exports = app;