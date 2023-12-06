import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/Login.css';
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../Services/AuthServices'; 
import Cookies from 'js-cookie';

const Login = () => {
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { Email, Password } = formData;
      const { token } = await loginUser(Email, Password);
    //   sessionStorage.setItem('token', token); we can stored token in session 
      Cookies.set('jwtToken', token, { expires: 1, secure: true, sameSite: 'strict' }); // storing token in Cokies
      const getToken = Cookies.get('jwtToken');
      if(getToken){
        navigate('/dashboard'); 
        console.log('gettoken',getToken)
      }
      
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  return (
    <body>
      <div className="d-flex justify-content-center">
        <div className="col-4 loginForm">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="text-left">Email</label>
              <input
                type="email"
                className="Login_input"
                id="email"
                name="Email"
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="text-left">Password</label>
              <input
                type="password"
                className="Login_input"
                id="password"
                name="Password"
                onChange={onInputChange}
                required
              />
            </div>
            <button type="submit" className="Submit_Button">Login</button>
            <Link to={"/SignUp"}>Signup</Link>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Login;
