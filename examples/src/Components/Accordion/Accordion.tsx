import React, { useState } from 'react';

export const Accordion: React.FC = () => {
    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title='menu' onClick={() => {setCollapsed(!collapsed)}}/>
            {collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}