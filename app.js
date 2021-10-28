require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT;

const homeRouter = require("./routes/home");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
