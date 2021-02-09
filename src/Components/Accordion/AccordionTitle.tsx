import React from "react";


type AccordionTitleType = {
    titleValue: string
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <div>
            <h3>{props.titleValue}</h3>
        </div>
    )
}

export default AccordionTitle