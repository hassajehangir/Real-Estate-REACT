import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
       <section className="f-wrapper"> 
       <div className="paddings innerWidth flexCenter f-container">

        {/* left side */}

            <div className="flexColStart f-left">
                <img src="./images/logo2.png" alt="" width={120} />
            
            <span className="secondaryText">
             Our vision is to make all people <br />
             the best place to live with them
                         </span>
            </div>

        {/* rigth side  */}
            <div className="flexColStart f-side">
                <span className="primaryText">Information</span>
                <span>123 Banaras Road, Lahore </span>

                <div className="flexCenter f-menu">
                    <span>Propreties</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
       </div>
       </section>
    )
}

export default Footer;