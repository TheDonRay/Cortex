import "../Styles/Homepage.css"; 
import { useState } from 'react'; 

export default function Homepage() { 
  
  const [Text, newText] = useState('');  

  const handleChange = (event) => { 
    newText(event.target.value); 
  }

  //this send button is going to be the function that actually sends data to the backend API 
  const buttonFunction = async (event) => { 
    event.preventDefault(); 

    // start of with error handling here as such  
    if (!Text){ 
      console.log('Error: No message or text appeared in textbox'); 
    } 

    try {   
      const sendData = await fetch(`http://localhost:5678/api/AI`, { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ 
          userMessage: Text,
        })
      });  
      // now get the backend response here as such 
      const backendResponse = await sendData.json(); 
      console.log(`Backend got the message`);  

      newText(""); // updates the state. 

    } catch (error) { 
      console.log('Error sending user data to the backend', error); 
    }
  }

  return (
    <>
      <div className="heading-div">
        <h1 className="title">Cortex</h1> 
      </div>    

      <div className="containerdiv"> 
        <div className="textbox-div"> 
          {/*Enter text box div here as such */}  
          <form onSubmit={buttonFunction}> 
            <label> 
              Ask Cortex Anything 
              <input 
                type="text" 
                value={Text} 
                onChange={handleChange} 
              />
            </label> 
            <button className="btn-design"> 
              Send
            </button>
          </form>
        </div> 
      </div>     

    </>
  );
}
