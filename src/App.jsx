import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Data from './data';
import Home from './home';
import Form1 from './form1';
function App() {
  

  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/form1" element={<Form1 />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  </Router>
  )
}

export default App
