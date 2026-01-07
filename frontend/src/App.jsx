import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage.jsx";

function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
