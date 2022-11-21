const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = 3000;
const app = express();
const ConnectionDatabase = require("./config/mongoose");
ConnectionDatabase();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({  origin: "*",}));
app.use(routes)
app.listen(PORT, () => console.log(`Server run in port ${PORT}`))