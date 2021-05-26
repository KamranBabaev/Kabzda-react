import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '14px',
        height: '14px',
        borderRadius: '7px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return(
        <div>
            <div style={onStyle} onClick={ () => {props.onChange(true)} }>on</div>
            <div style={offStyle} onClick={ () => {props.onChange(false)} }>off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}

export default OnOff;