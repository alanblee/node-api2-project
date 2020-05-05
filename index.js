const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config routes

app.use(cors());
//use routes


//port config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
