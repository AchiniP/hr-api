require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const EmployeeRouter = require("./src/routes/EmployeeRouter");
const ProjectRouter = require("./src/routes/ProjectRouter");
const EmployeeLeaveRouter = require("./src/routes/EmployeeLeaveRouter");
const InfoRouter = require("./src/routes/InfoRouter");

const APP_PORT = process.env.APP_PORT;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database..."));

app.use(express.json());

app.use("/employee", EmployeeRouter);
app.use("/project", ProjectRouter);
app.use("/leave", EmployeeLeaveRouter);
app.use("/info", InfoRouter);

app.listen(APP_PORT, () => console.log("server started on port ", APP_PORT));
