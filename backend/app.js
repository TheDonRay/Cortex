const express = require("express");
const app = express(); 
const cors = require('cors'); 

app.use(express.json());
app.use(cors()); 
//import routes
const airoute = require("./routes/AIroute.js");

//instantiate the route
app.use("/api", airoute);

app.get("/", (req, res) => {
  res.json({
    CortexServer: "running",
  });
});

module.exports = app;
