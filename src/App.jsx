
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import About from "./components/About";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";


function App() {
  

  return (
    <>
       <BrowserRouter>
      <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
