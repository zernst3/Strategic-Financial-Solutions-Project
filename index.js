const express = require("express");
const app = express();
const PORT = 8080;
const database = require("./database");
app.use(express.json());

// Route: GET /
app.get("/", (req, res) => {
  res.send("The server is working!");
});

app.use("/api", require("./api"));

// for errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

app.listen(PORT, () => {
  console.log(
    `Strategic Financial Solutions application running on port: ${PORT}`
  );
});
