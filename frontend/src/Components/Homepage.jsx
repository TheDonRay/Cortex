import "../Styles/Homepage.css"; 
import { useNavigate } from 'react-router-dom';

export default function Homepage() { 
  const navigate = useNavigate(); 
   
  function redirectFunction() { 
    navigate()
  }
  return (
    <>
      <div className="heading-div">
        <h1 className="title">Cortex</h1> 
      </div>  

      <button className='btn-design'> 

      </button>
      
    </>
  );
}
