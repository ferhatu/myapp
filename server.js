const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/naber", (req, res) => {
  res.send("hello me nnnnnn");
});

const myPort = 5000;
app.listen(myPort, () =>
  console.log(`List
ening on port ${myPort}`)
);
