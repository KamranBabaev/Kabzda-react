import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}
const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <PageTitle title={props.titleValue}
                       onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
    onChange: () => void
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1 onClick={props.onChange}>{props.title}</h1>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}

export default Accordion;