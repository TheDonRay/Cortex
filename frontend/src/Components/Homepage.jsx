import "../Styles/Homepage.css"; 
import { useState } from 'react'; 

export default function Homepage() { 
  const [isloading, setisLoading] = useState(false); 
  const [Text, newText] = useState('');   
   const [response, setResponse] = useState('');  // Add this to store the response

  const handleChange = (event) => { 
    newText(event.target.value); 
  }

  //this send button is going to be the function that actually sends data to the backend API 
  const buttonFunction = async (event) => { 
    event.preventDefault(); 

    // start of with error handling here as such  
    if (!Text){ 
      console.log('Error: No message or text appeared in textbox');  
      return;
    } 

    setisLoading(true); // start loading 

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

      
      const backendResponse = await sendData.json();  // now get the backend response here as such 
      setResponse(backendResponse.response); 
      console.log(`Backend got the message`);  

      newText(""); // updates the state. 

    } catch (error) { 
      console.log('Error sending user data to the backend', error); 
      setResponse('Error: Could not get response');  
    } finally { // remember to stop the loading  here. 
      setisLoading(false); // stop the loading 
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
            <button className="btn-design" disabled={isloading}> 
              {isloading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div> 
      </div>  

      <div className="backend-response-container">  
       {isloading ? ( 
        <p>Loading...</p>
       ) : response ? ( 
        <p>{response}</p>
       ) : ( 
        <p>How can Cortex be of service</p>
       )}
      </div> 
    </>
  );
}
