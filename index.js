const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("The server is working!");
});

app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(
    `Strategic Financial Solutions application running on port: ${PORT}`
  );
});
