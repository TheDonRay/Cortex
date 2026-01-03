const express = require("express");
const airoute = express.Router();
const OpenAI = require("openai");
const client = new OpenAI({
  apiKey: process.env.OPENAIKEY,
});

airoute.post("/AI", async (req, res) => {
  // set up the route here to get data from the body as such
  try {
    const { userRes } = req.body;

    if (!userRes || userRes === ""){ 
        return res.status(404).json({ 
            error: 'No valid input'
        }); 
    } 
    const response = await client.chat.completions.create({ 
        model: 'gpt-5-nano', 
        messages: [{ role: 'user', content: userRes}]
    });  
    res.send({ response: response.choices[0].message.content }); 
  } catch (error) {
    console.error("Error with getting AI response", error); 
    res.status(500).json({ 
        error: 'failed to get AI response'
    }); 
  }; 
});

module.exports = airoute;
