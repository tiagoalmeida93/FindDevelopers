const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello Dev!" });
});

app.listen(3333);
