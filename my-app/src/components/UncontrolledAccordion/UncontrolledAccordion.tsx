import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <PageTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed)} }/>
            { !collapsed && <AccordionBody/> }
        </div>
    )
}

type PageTitlePropsType = {
    title: string;
    onClick: () => void
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1 onClick={ () => {props.onClick()} }>{props.title}</h1>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}