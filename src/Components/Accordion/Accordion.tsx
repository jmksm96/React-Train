import React from "react";
import AccordionBody from "./AccordionBody";
import AccordionTitle from "./AccordionTitle";

export type AccordionType = {
    titleValue: string
    collapsed: boolean
}

const Accordion = (props: AccordionType) => {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle titleValue={props.titleValue}/>

            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle titleValue={props.titleValue}/>
                <AccordionBody/>
            </div>

        )
    }
}


export default Accordion;