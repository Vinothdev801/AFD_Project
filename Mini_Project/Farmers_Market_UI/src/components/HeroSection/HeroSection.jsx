import React from 'react'
import './HeroSection.css';
import hero from '../../assets/img/hero.png';

const handleClick = () => {
  const vegtable_element = document.getElementById("vegtables");
  vegtable_element.scrollIntoView({behavior: "smooth"})
}

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className='hero-section'>
            <div className="text">
                <h2>Fresh Vegetables & Flowers</h2>
                <p>Buy fresh, locally grown produce <br/> and beatiful flowers.</p>
                <button onClick={handleClick}>Shop Now</button>
            </div>
            <div className="image">
              <img src={hero} width="700px" height="650px" alt="Hero.png" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection