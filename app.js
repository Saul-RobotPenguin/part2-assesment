const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(logger("dev"));
app.use("/api", routes);

module.exports = app;
