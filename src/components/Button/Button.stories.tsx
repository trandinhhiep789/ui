import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
    title: 'ui/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
    primary: true,
    children: 'Default Button',
    size: 'medium',
    block: false
}

export const OutlineButton = Template.bind({})
OutlineButton.args = {
    primary: true,
    children: 'Outline Button',
    size: 'medium',
    typeBtn: 'outline'
}
