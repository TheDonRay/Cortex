require('dotenv').config(); 
const app = require('./app.js'); 

const PORT = process.env.PORT || 4500;  

app.listen(PORT, () => { 
    console.log(`Server successfully running on ${PORT}`); 
}); 

