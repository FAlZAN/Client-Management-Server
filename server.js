const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

mongoose.connect(process.env.DB_CONN_STRING, () => {
  console.log("connected to MonogDB successfully.");
});

app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.use("/api", route);

app.listen(PORT, () => console.log(`App running on ${PORT}`));
