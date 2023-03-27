const express = require("express");
const path = require("path");
const logger = require("./middlewares/logger");

const PORT = process.env.PORT || 5000;
const app = express();

//init middleware
// app.use(logger);

//to use the router :
app.use("/api/members", require("./routes/api/members"));

//set public folder as public static folder GOOD PRACTICE BACH MACHI A CHAQUE FOIS NDIRO ROUTE SPECIAL L FILE
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
  console.log(`Listening to server on port : ${PORT}`);
});
