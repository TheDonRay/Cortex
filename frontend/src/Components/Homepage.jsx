import "../Styles/Homepage.css"; 
import { useState } from 'react'; 

export default function Homepage() { 
  
  const [userText, newText] = useState('');  

  const handleChange = (event) => { 
    newText(event.target.value); 
  }

  //this send button is going to be the function that actually sends data to the backend API 
  const buttonFunction = async (event) => { 
    event.preventDefault(); 

    const userInput = 
  }

  return (
    <>
      <div className="heading-div">
        <h1 className="title">Cortex</h1> 
      </div>    

      <div className="containerdiv"> 
        <div className="textbox-div"> 
          {/*Enter text box div here as such */} 
        </div> 
      </div>       

      <button className="btn-design">
        Send
      </button>

    </>
  );
}
