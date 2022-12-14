const express = require("express");
const router = express.Router();
const path = require("path");
function work(day, hour) {
  if (hour >= 9 && hour <= 17 && day !== 0 && day !== 6) return true;
  return false;
}
const workTimesMiddeleware = function (req, res) {
  
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

  if (work(day, hour)) {
    res.render("ourServices");
  } else res.render("outOfService", { sec, min, hour, day });
};
// let timer=setInterval(workTimesMiddeleware,1000)
router.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});
router.get("/contact", workTimesMiddeleware, (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "ourServices.ejs"));
});
router.get("/Services", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "Public", "Shop.html"));
});

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/Public/404.html"));
});
module.exports = router;
