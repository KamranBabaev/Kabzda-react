import React from "react";
import {UncontrolledAccordion} from "../components/UncontrolledAccordion/UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action('accordion mode change')
export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Users'}/>
}