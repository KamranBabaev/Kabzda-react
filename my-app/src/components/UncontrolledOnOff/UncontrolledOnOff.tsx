import React, {useState} from "react";

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '14px',
        height: '14px',
        borderRadius: '7px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {setOn(true)
        props.onChange(true)}

    const offClicked = () => {setOn(false)
        props.onChange(false)}

    return(
        <div>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}

export default UncontrolledOnOff;