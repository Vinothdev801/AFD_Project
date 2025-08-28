import React from 'react'
import img from '../assets/img/about.png';
import './css/About.css';
const About = () => {
  return (
    <div className='about-container'>
        <div className="about">
          <img src={img} alt="image"/>
          <div className='about-content'>
            <h2>About Us</h2>
            <p>
            At Farmer's Market, we believe in bringing you closer to nature—one product at a time. Our platform connects local farmers directly with customers, cutting out middlemen and ensuring you get the **freshest**, **healthiest**, and **most natural** produce available.
            <br /><br />
            All our products are **grown organically**, free from harmful chemicals, and are sourced **directly from trusted local farmers** who are committed to sustainable and ethical farming practices. From farm-fresh vegetables and fruits to hand-picked herbs and flowers, everything we offer comes straight from the soil to your doorstep.
            <br /><br />
            By shopping with us, you're not only nourishing your family with clean food but also supporting local agriculture and empowering farming communities. This is not just a market—it's a movement towards a healthier, greener, and more conscious way of living.
          </p>

          </div>
            
        </div>
    </div>
  )
}

export default About