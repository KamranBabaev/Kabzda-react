import React, {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback}
    items={[
        {title: 'Nick', value: 1},
        {title: 'Sam', value: 2},
        {title: 'John', value: 3},
    ]}
    onClick={onClickCallback}
/>
export const UsersUncollapsedMode = () => <Accordion
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
    items={[
        {title: 'Nick', value: 1},
        {title: 'Sam', value: 2},
        {title: 'John', value: 3},
    ]}
    onClick={onClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: 'Nick', value: 1},
            {title: 'Sam', value: 2},
            {title: 'John', value: 3},
        ]}
        onClick={value => alert('Okaaay')}
    />
}