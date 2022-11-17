import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DatePicker from './DatePicker'

export default {
    title: 'ui/DatePicker',
    component: DatePicker,
    argTypes: {}
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = args => <DatePicker {...args} />

export const DefaultModal = Template.bind({})
DefaultModal.args = {}
