import React from "react";
import './Hero.css';
// import {HiLocationMarker} from 'react-icons/hi'; 
const Hero = () => {
    return (
        <>
            <section className="hero-wrapper">
                <div className="flexCenter paddings innerWidth hero-container">

       {/* Hero Left  */}
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="blue-circle" />
                            <h1>Find Out<br /> Your Lucrative <br /> Property</h1>
                        </div>

                        <div className="flexColStart hero-des">
                            <span className="secondaryText">You can Find variety of Properties</span>
                            <span className="secondaryText">It is easy to Find and buy</span>
                        </div>

                        {/* <div className="search-bar">
                           39:00 
                            <HiLocationMarker color='var{(--blue)}' size={25} />
                        </div> */}
                    
                    {/* <div className="Stats"></div>  43:00 */}
                    </div>

                    {/* Hero Right */}
                    <div className="flexCenter hero-right">
                        <div className="image-container">
                            <img src='./images/hero-image.png' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
