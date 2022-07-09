import React from 'react'
import { Link } from 'react-router-dom'



function Signup() {
    return (
      <div> 
          <h2>MCI AUTH</h2>
          <h4>Sign Up</h4>
          <p> Have an account? <Link to="/">Sigin</Link> </p>
          <form>
              <div>
  
                  <label >Email Address</label>
                  <input type="email" name="email" placeholder="Email"/>
              </div>
  
  
              <div>
  
                  <label >Password</label>
                  <input type="password" name="password" placeholder="Password"/>
              </div>
              
              <button>Sign Up</button>
          </form>
  
  
  
      </div>
    )
  }
  

export default Signup