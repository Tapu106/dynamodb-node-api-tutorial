require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 9000;

const homeRouter = require("./routes/home");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
