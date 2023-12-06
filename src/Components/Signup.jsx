import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddUsers } from "../Services/AuthServices";
import '../UI/Signup.css';

const SignUp = () => {
    const[formData,setformData] = useState({
        FirstName:'',
        LastName:'',
        Email :'',
        Password:'',
    });
    const onchange = (e) =>{
        const {name,value} = e.target;
        setformData({
            ...formData,
            [name]:value,
        }) 
    }
   const onsubmit = async(e) =>{
    e.preventDefault();
    debugger
      const response = await   AddUsers(formData)
      if(response){
        alert("Data saved successfully")
      }
     console.log("response",response)
   } 
  return (
    <div className="d-flex  justify-content-center">

   
      <div className="col-4 signupForm">
            <form onSubmit={onsubmit}>
                <div className="row">
                  <div className="col-6">
                     <label htmlFor="FirstName" className="text-left">First Name</label>
                      <input
                        type="text"
                        className="SignUp_input"
                        id="FirstName"
                        name="FirstName"
                        required
                        onChange={onchange}
                    />
                 </div>
                 <div className="col-6">
                    <label htmlFor="LirstName" className="text-left">Last name</label>
                    <input
                        type="text"
                        className="SignUp_input"
                        id="LirstName"
                        name="LastName"
                        required
                        onChange={onchange}
                    />
                 </div>
                </div>
                 <div className="mb-3 ">
                    <label htmlFor="email" className="text-left">Email</label>
                    <input
                        type="email"
                        className="SignUp_input"
                        id="email"
                        name="Email"
                        required
                        onChange={onchange}

                    />
                 </div>
                 <div className="mb-3 ">
                    <label htmlFor="password" className="text-left">Password</label>
                    <input
                        type="password"
                        className="SignUp_input"
                        id="password"
                        name="Password"
                        required
                        onChange={onchange}

                    />
                 </div>
                 <button type="submit" className="Submit_Button">SignUp</button>
            </form>
    </div>
    </div>
  );
};

export default  SignUp
