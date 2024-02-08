//import React from "react";
import { Link ,useNavigate} from "react-router-dom";
//import {useSelector} from 'react-redux'
import axios from "axios"

function Navbar() {
  
  const navigate = useNavigate()
  const handleLogout = () =>{
      axios.get('https://mernappback-qhiy.onrender.com/auth/logout')
      .then(res=>{
          if(res.data.status){
              navigate('/login')
          }
      }).catch(err=>{
          console.log(err)
      })
  }
  return (
    <nav>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
       
          
           <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li><button 
    className='btn btn-default border w-100 bg-light rounded-4 text-decoration-none'
    onClick={handleLogout}
    >LOGOUT</button></li>
       
       
      </ul>
    </nav>
  );
}

export default Navbar;
