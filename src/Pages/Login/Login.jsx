import React from 'react';
import LoginLogo from "../../assets/login-logo.png";
import './Login.css';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from 'react';
const Login =() =>{
  // Loading
  const[loading , setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>
        setLoading(false),3000)
     
   }, [])

    const [email, setEmail] = useState("");
   
  
    //  Form Submit Handler
    const formSubmitHandler = (event) => {
      event.preventDefault();
  
      if (email.trim() === "") {
        return toast.error("Email is required");
      }
  
  
      console.log({ email });
      setEmail("");
  
    };


    return(
        <div className="login">
               {
         loading ?
         <div className="loading">
            <SyncLoader />
         </div>
         :
 <div>
           <Link to="/">
                <img src={LoginLogo} alt='Logo' className='logoImg' />
            </Link>
            <div className="form-items">
                <h3>Sign In</h3>
                
                <ToastContainer />
                <form onSubmit={formSubmitHandler} className="form">
                <label>Email or mobile phone number </label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    />

                    <button className="login-continue">Continue</button>
                        <p>By signing in, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span> </p>

                        {/* <select>
                            <option>Need help?</option>
                            <option> Forgot your password?</option>
                            <option> Other issues with Sign-In</option>
                            <option>Need help?</option>
                        </select> */}
                </form>

              
            </div> 
            <div className="new">
             <h3><Link to="/Register">New to Amazon?</Link></h3>
                 {/* <button>
                 <Link to="/Register">Create your Amazon account</Link>
                </button> */}
                <div className="form-copyright">
                     <ul>
                         <li>Conditions of Use</li>
                         <li>Privacy Notice</li>
                         <li>Help</li>
                    </ul>
                    <p>©1996–2024, Amazon.com, Inc. or its affiliates </p>
                </div>
            </div>
            </div>
                        }  
        </div>
    )
}
export default Login

