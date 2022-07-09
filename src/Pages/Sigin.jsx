import React from 'react'
import {Link} from 'react-router-dom'
import { UserAuth } from '../Store/Store'

function Sigin(props) {

const {user} = UserAuth();
  return (
    <div> 
        <h2>MCI AUTH</h2>
        {JSON.stringify(user)} 
        {props.value}
        <h4>Sign in</h4>
        <p> Don't have an account <Link to="/signup">Signup</Link> </p>
        <form>
            <div>

                <label >Email Address</label>
                <input type="email" name="email" placeholder="Email"/>
            </div>


            <div>

                <label >Password</label>
                <input type="password" name="password" placeholder="Password"/>
            </div>
            
            <button>Sign In</button>
        </form>



    </div>
  )
}

export default Sigin