const express = require("express");
const app = express();
const myRoutes = require("./routes/routes");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/Public"));
app.use(express.static(__dirname + "/views"));
app.use("/", myRoutes);
app.listen(3000, (err) => {
  if (err) throw err;
  else console.log("server is running");
});
