import React from 'react';
import './AuthPage.scss';
import img from '../../assets/img/Data.png';
import SingIn from './SingIn/SingIn';

export default function AuthPage(props) {
   return(
      <main>
         <section id="slider">
            <img src={img} alt="Illustration of Invision" />
         </section>
         <section id="formInputs">
            <h3 className="title">Invision</h3>
            { props.auth === 'singIn' ? <SingIn></SingIn> : <></> }
         </section>
      </main>
   );
}