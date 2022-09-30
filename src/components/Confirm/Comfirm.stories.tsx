import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Confirm from './Confirm'

export default {
    title: 'ui/Confirm',
    component: Confirm,
    argTypes: {}
} as ComponentMeta<typeof Confirm>

const Template: ComponentStory<typeof Confirm> = args => <Confirm {...args} />

export const DefaultConfirm = Template.bind({})
DefaultConfirm.args = {}
