import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import Validation from "./signup_val";
//const bcrypt = require("bcrypt");

// eslint-disable-next-line no-unused-vars
const Login = ()=> {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  axios.defaults.withCredentials= true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation({ email, password }));
    axios
      .post("https://mernappback-qhiy.onrender.com/auth/login", { email, password })
      .then((res) => {
        console.log(res)
        if(res.data.status){
            navigate('/dashboard');
        }    
      })
      .catch(err => {
        console.log(err);
      })
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>LOGIN</h2>
        <form action="" onSubmit={handleSubmit}>
         

          <div className="mb-3">
            <label>
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control rounded-4"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label>
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control rounded-4"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100  rounded-4">
            <strong>Log In</strong>
          </button>
          <Link to="/forgotpassword">Forgot Password</Link>
          <p>You are agree to our terms and policies</p>
          <Link
            to="/signup"
            className='btn btn-default border w-100 bg-light rounded-4 text-decoration-none'
          >
           <strong>Signup</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
