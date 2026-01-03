const express = require("express");
const app = express();

app.use(express.json());

//import routes
const airoute = require("./routes/AIroute.js");

//instantiate the route
app.use("/api/", airoute);

app.get("/", (req, res) => {
  res.json({
    CortexServer: "running",
  });
});

module.exports = app;
