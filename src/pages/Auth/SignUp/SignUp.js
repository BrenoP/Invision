import React from 'react';
import '../../../components/Auth.scss';
import TextField from '@material-ui/core/TextField';
import iconGoogle from '../../../assets/img/Google.svg';
import { Link } from 'react-router-dom'

export default function SignUp() {
   return(
      <div className="container">
         <h4>Getting Started</h4>
         <form noValidate autoComplete="off">
            <div className="input">
               <TextField
                  id="standard-error-helper-text"
                  fullWidth 
                  error={false}
                  label="Fullname"
                  helperText=""
               />
            </div>
            <div className="input">
               <TextField
                  id="standard-error-helper-text"
                  fullWidth
                  error={false}
                  label="Users name or Email"
                  helperText=""
               />
            </div>
            <div className="input">
               <TextField
                  id="standard-error-helper-text"
                  fullWidth
                  error={false}
                  type="password"
                  label="Create Password"
                  helperText=""
               />
            </div>
                        
            <div className="submit">
               <button type="submit">Sign up</button>
            </div>
            <div className="division">
               <span></span>
               <div>Or</div>
               <span></span>
            </div>
            <div className="singIn-google">
               <button>
                  <img src={iconGoogle} alt="Google Logo" />
                  Sign up with Google
               </button>
            </div>
            <p className="new-account">
               By signing up, you agree to Invision 
               <Link className="sing-up" to="/Terms"> Terms of Conditions</Link>  and  
               <Link className="sing-up" to="/Privacy"> Privacy Policy</Link>
            </p>
            <p className="new-account">Already on Invision? <Link className="sing-up" to="/SignIn">Log in</Link></p> 
         </form>
      </div>
   );
}