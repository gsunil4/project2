let express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("<h1>Hello Wellcom To Customer Page<h1>");
});

router.get("/login", function (req, res) {
  res.send("hello wellcom to Customer home page");
});

router.get("/register", function (req, res) {
  res.send("hello welcom to Customer register page");
});

router.get("/cart", function (req, res) {
  res.send("hello wellcom to Customer cart page");
});
router.get("/parchage", function (req, res) {
  res.send("hello welcom to Customer parchage page");
});
router.get("/order", function (req, res) {
  res.send("hello wellcom to order page");
});

module.exports = router;
