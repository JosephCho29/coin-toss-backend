const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./Controllers/users");
const eventsRouter = require("./Controllers/events");
const profileRouter = require("./Controllers/profiles");

app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/profile", profileRouter);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
