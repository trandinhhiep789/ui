import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import IconButton from './IconButton'

export default {
    title: 'ui/IconButton',
    component: IconButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />

export const IconButtonUI = Template.bind({})
IconButtonUI.args = {
    primary: true,
    children: 'IconButtonUI',
    size: 'medium',
    icon: ''
}
