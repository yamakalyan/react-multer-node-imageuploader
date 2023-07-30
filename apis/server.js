const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const user = require("./controllers/usersController");

app.use(cors({ origin: "*" }));

dotenv.config();

app.listen(process.env.PORT | 4000, () => {
  console.log("server working at 3120");
});

app.use(express.json());
app.use(express.static('public'))
app.use("/user", user);
