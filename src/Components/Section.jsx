import React from 'react';
import "./Section.css";

const Section = ({Icon, title, cole, selected})=>{
    return(
        <div
            className={`section ${selected && 'section-selected'}`}
            style={{
                borderBottom:`3px solid ${cole}`,
                color:`${selected && cole}`
            }}
        >
            <Icon/>
            <h4>{title}</h4>
        </div>
    )
}

export default  Section;