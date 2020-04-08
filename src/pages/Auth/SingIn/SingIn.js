import React from 'react';
import './SingIn.scss';
import TextField from '@material-ui/core/TextField';
import iconGoogle from '../../../assets/img/Google.svg';
import { Link } from 'react-router-dom'

export default function SingIn() {
   return(
      <div className="container">
         <h4>Welcome to Invision</h4>
         <form noValidate autoComplete="off">
            <div className="input">
               <TextField
                  id="standard-error-helper-text"
                  fullWidth 
                  error={false}
                  label="Users name or email"
                  helperText=""
               />
            </div>
            <div className="input">
               <TextField
                  id="standard-error-helper-text"
                  fullWidth
                  error={false}
                  label="Password"
                  helperText=""
               />
            </div>
            
            <Link to="/forget" className="forgot">Forgot Password?</Link>
            
            <div className="submit">
               <button type="submit">Sign in</button>
            </div>
            <div className="division">
               <span></span>
               <div>Or</div>
               <span></span>
            </div>
            <div className="singIn-google">
               <button>
                  <img src={iconGoogle} alt="Google Logo" />
                  Sing in with Google
               </button>
            </div>
            <p className="new-account">New Invision? <Link className="sing-up" to="/SingUp">Create Account</Link></p> 
         </form>
      </div>
   );
}