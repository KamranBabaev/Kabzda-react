import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {ratingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

const App = () => {
    let [ratingValue, setRatingValue] = useState<ratingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [swithOn, setSwithOn] = useState<boolean>(false)
    return (
        <div className="App">
            {/*<Accordion items={*/}
            {/*    [{title: 'Nick', value: 1},*/}
            {/*        {title: 'Sam', value: 2},*/}
            {/*        {title: 'John', value: 3},]}*/}
            {/*           titleValue={'Меню'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}*/}
            {/*           onClick={}*/}
            {/*/>*/}
            <OnOff on={swithOn} onChange={(on) => {
                setSwithOn(on)
            }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledOnOff onChange={setSwithOn}/> {swithOn.toString()}
            <UncontrolledRating/>
        </div>
    );
}


export default App;
