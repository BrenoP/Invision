import React from 'react';
import './AuthPage.scss';
import SingIn from './SingIn/SingIn';
import Slider from 'infinite-react-carousel';
import slides from './Slides';

export default function AuthPage(props) {

   return (
      <main>
         <section id="slider">
            <Slider
               dots
               arrows={false}
               autoplay
               appendDots={dots => <ul style={{ display: 'block' }}>{dots}</ul>}
            >
            {
               slides.map(slide => (
                  <div key={slide.id} className="slide">
                     <img src={slide.img} alt="Illustration of Invision" />
                     <div>
                        <h4>{slide.title}</h4>
                        <p>{slide.text}</p>
                     </div>
                  </div>
               ))
            }
            </Slider>
         </section>
         <section id="formInputs">
            <h3 className="title">Invision</h3>
            { props.auth === 'singIn' ? <SingIn></SingIn> : <></> }
         </section>
      </main>
   );
}