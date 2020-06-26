const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

const myPort = 5000;
app.listen(myPort, () =>
  console.log(`List
ening on port ${myPort}`)
);
