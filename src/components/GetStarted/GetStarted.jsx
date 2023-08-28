import React from "react";
import './getStarted.css';

const getStarted = () =>{
    return(
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get Started with MrJ</span>
                    <span className="secondaryText">
                        Subscribe and find super attractive price <br />
                        Find your properties
                    </span>
                    <button className="button">
                        <a href="mailto:hassanjahangir109@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default getStarted;