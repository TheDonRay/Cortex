const express = require("express");
const airoute = express.Router();
const AicontrollerFunction = require('../controllers/Airoute.controller.js'); 

airoute.post("/AI", AicontrollerFunction); 
module.exports = airoute;
