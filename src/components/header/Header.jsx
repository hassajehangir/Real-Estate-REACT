import React, { useState } from "react";
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';

const Header = () => {
    const [menuOpened, setMenyOpened] = useState(false);
    const getMenuStyles = (menuOpened) =>{
        if(document.documentElement.clientWidth <= 800)
        {
            return{right: !menuOpened && "-100%"}
        }
    }
    return (
        <>
            <section className="h-wrapper">
                <div className="flexCenter paddings innerWidth h-container">
                    <img src="./images/logo.png" width={100} />
                    <div className="flexCenter h-menue"
                    style={getMenuStyles(menuOpened)}
                    >
                        <a href="">Residencies</a>
                        <a href="">Our Values</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>

                <div className="menu-icon" onClick={()=> setMenyOpened((prev)=>!prev)}>
       
       <BiMenuAltRight size={30} />
               </div>    
                </div>
                
            </section>
        </>
    )
}

export default Header;
