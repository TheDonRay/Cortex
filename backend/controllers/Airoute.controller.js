const OpenAI = require("openai");
const client = new OpenAI({
  apiKey: process.env.OPENAIKEY,
});

const AIfunction = async (req, res) => { 
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
        console.error('Error with sending response to AI');  
        console.log(error); 
        res.status(501).json({ 
            Error: error
        }); 
    }; 
} 

module.exports = AIfunction; 