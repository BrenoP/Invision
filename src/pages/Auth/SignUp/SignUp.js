import React from 'react';
import '../../../components/Auth.scss';
import TextField from '@material-ui/core/TextField';
import iconGoogle from '../../../assets/img/Google.svg';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function SignUp() {

   const { handleSubmit, register, errors } = useForm();
   const onSubmit = () => {
     alert('Sign up')
   };

   return (
      <div className="container">
         <h4>Getting Started</h4>
         <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="input">
               <TextField
                  id="standard-error-helper-text"
                  name="fullname"
                  fullWidth 
                  error={false}
                  label="Fullname"
                  helperText=""
                  inputRef={register({ 
                     required: '* This field can not be empty',
                  })}
               />
               <span className="error">{ errors.fullname && errors.fullname.message }</span>
            </div>
            <div className="input">
               <TextField
                  id="standard-error-helper-text"
                  name="user"
                  fullWidth
                  error={false}
                  label="Users name or Email"
                  helperText=""
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
                  error={false}
                  type="password"
                  label="Create Password"
                  helperText=""
                  inputRef={register({ 
                     required: '* This field can not be empty',
                  })}
               />
               <span className="error">{ errors.password && errors.password.message }</span>
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