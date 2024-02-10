import {useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
//import {useSelector} from 'react-redux'
import axios from "axios"

function Navbar() {
  
  const navigate = useNavigate()
   const [menuOpen, setMenuOpen] = useState(false);
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
   <>
   <header>
        <nav>
          <div className="container">

            <div className="menu-toggle" onClick={()=>{setMenuOpen(!menuOpen)}}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`} >
              <li>
                <a href="#home"><Link to="/">Home</Link></a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#work">Our Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                {" "}
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <button
                  className="btn btn-default border w-100 bg-light rounded-4 text-decoration-none"
                  onClick={handleLogout}
                >
                  LOGOUT
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
   </>
  );
}

export default Navbar;
