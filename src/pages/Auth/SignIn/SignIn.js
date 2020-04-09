import React from 'react';
import '../../../components/styles/Auth.scss';
import TextField from '@material-ui/core/TextField';
import iconGoogle from '../../../assets/img/Google.svg';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function SignIn() {
   
   const { handleSubmit, register, errors } = useForm();
   const onSubmit = () => {
     alert('Logged in')
   };

   const validate = () => {
      if(errors.user || errors.password) {
         return <p className="error">User can continue only when all fields is valid and fields is not empty</p>
      }
   }

   return (
      <div className="container">
         <h4>Welcome to Invision</h4>
            <form onSubmit={ handleSubmit(onSubmit) }>
               <div className="input">
                  <TextField
                     id="standard-error-helper-text"
                     name="user"
                     fullWidth 
                     label="Users name or email"
                     inputRef={register({ 
                        required: '* This field can not be empty',
                     })}
                  />
                  <span className="error">{ errors.user && errors.user.message }</span>
               </div>
               <div className="input">
                  <TextField
                     id="standard-error-helper-text"
                     name="password"
                     fullWidth
                     type="password"
                     label="Password"
                     inputRef={register({ 
                        required: '* This field can not be empty',
                     })}
                  />
                  <span className="error">{ errors.password && errors.password.message }</span>
               </div>
               
               <Link to="/forget" className="forgot">Forgot Password?</Link>
               
               { validate() }

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
                     Sign in with Google
                  </button>
               </div>
               <p className="new-account">New Invision? <Link className="sing-up" to="/SignUp">Create Account</Link></p> 
            </form>
      </div>
   );
}