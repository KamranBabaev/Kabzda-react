import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <PageTitle title={props.titleValue}
                       onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={ () => {props.onClick}}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li
                onClick={() => {
                    props.onClick(i.value)
                }}
                key={index}>{i.title}</li>)}
        </ul>)
}

export default Accordion;