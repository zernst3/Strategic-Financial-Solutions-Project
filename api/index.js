const router = require("express").Router();
module.exports = router;

router.get("/", (req, res) => {
  res.send("The api route is working!");
});

router.use("/creditors", require("./creditors"));

router.use((req, res, next) => {
  const error = new Error("API Route Not Found");
  error.status = 404;
  next(error);
});
