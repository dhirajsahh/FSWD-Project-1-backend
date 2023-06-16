const express = require("express");
const { connectdb } = require("./config/connectdb");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
connectdb();
const mainRouter = require("./Routers/mainRouter");
app.use("/api", mainRouter);
app.listen(port, () => {
  console.log(`app is running in port ${port}`);
});
