import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

export const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE-COLLAPSED') {
        return !state
    }
    return state
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

let [collapsed, dispatch] = useReducer(reducer, false);

    return (<div>
            {/*<PageTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed)} }/>*/}
            <PageTitle title={props.titleValue} onClick={ () => { dispatch( {type: 'TOGGLE-COLLAPSED'} )} }/>
            { !collapsed && <AccordionBody/> }
        </div>)
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