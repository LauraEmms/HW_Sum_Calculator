const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(__dirname))

app.get("/", (req, res) => {
  const options = { root: path.join(__dirname) };
  const fileName = "index.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});