import React from 'react';
import './Register.css';
import '../Login/Login.css';
import LoginLogo from "../../assets/login-logo.png";
// import Footer from '../../components/Footer/Footer';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from 'react';

const Register = () =>{
    const [text, setText] = useState("");
    const [num, setNum] = useState("");
    const [password, setPassword] = useState("");
    // const [text, setText] = useState("");

  
    //  Form Submit Handler
    const formSubmitHandler = (event) => {
      event.preventDefault();
  
      if (text.trim() === "") {
        return toast.error("Email is required");
      }
      if (num.trim() === "") {
        return toast.error("Number is required");
      }
      if (password.trim() === "") {
        return toast.error("password is required");
      }
      console.log({ text });
      setText("");
      setNum("");
      setPassword("")
    };

        // Loading
  const[loading , setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>
        setLoading(false),3000)
     
   }, [])
    return(
        <div className='register'>
                {
         loading ?
         <div className="loading">
            <SyncLoader />
         </div>
         :
 <div>
            <div className="login">

            
            <Link to="/">
                <img src={LoginLogo} alt='Logo' className='logoImg' />
            </Link>
                 <div className="form-items">
                     <h3>Create Account </h3>

                     <ToastContainer />
                     <form onSubmit={formSubmitHandler} className="form">
                         <label>Your name  </label>
                         <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            placeholder="First and last name"
                            />
                         <label>Mobile number </label>
                         <div className="num">
                         <select>
                            <option> EG +20</option>
                            <option>Afghanistan +93 </option>
                            <option>Albania +55</option>
                            <option>Algeria +213</option>
                            <option>American Samoa +1</option>
                            <option> EG +20</option>
                            <option>Afghanistan +93 </option>
                            <option>Albania +55</option>
                            <option>Algeria +213</option>
                            <option>American Samoa +1</option>
                        </select>
                        <input type="number" placeholder="Mobile number" value={num}
                            onChange={(e) => setNum(e.target.value)}
                        />
                        </div>

                        <label>Password</label>
                        <input type='password' placeholder='At least 6 characters'   value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                        <label>Re-enter password </label>
                        <input type='password'   value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                            
                             <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply. </p>
                            <button  className="login-continue">Verify mobile number</button>
                            <p>Already have an account? <Link to="/Login">Sign in</Link></p>
                            <p>By creating an account, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span> </p>
                     </form>
     
                   
                 </div> 
                 <div className="new">
                
                  
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
             {/* <Footer /> */}
             </div>
                        }  
        </div>
    )
}

export default Register
