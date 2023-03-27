const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

//set public folder as public static folder GOOD PRACTICE BACH MACHI A CHAQUE FOIS NDIRO ROUTE SPECIAL L FILE
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
  console.log(`Listening to server on port : ${PORT}`);
});
