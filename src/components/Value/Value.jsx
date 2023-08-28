import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

import "./Value.css";
import data from "../../Utilitites/accordion";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}

        <div className="v-left">
          <div className="image-container">
            <img src="./images/value.png" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="blueText">Our Values</span>
          <span className="primaryText">Values We Give to You</span>
          <span className="secondaryText">
            We allways ready to provide out best service
            <br />
            We believe in a quality service that always best to you{" "}
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpended={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText"> {item.heading}</span>
                    <div className="flexCenter icon">
                    <MdOutlineArrowDropDown size={20} />
                      
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail} </p>
                </AccordionItemPanel>
              </AccordionItem> 
              )
            })}
          </Accordion>
        </div>

        
      </div>
    </section>
  );
};

export default Value;
