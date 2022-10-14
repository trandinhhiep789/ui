import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from './Select'

export default {
    title: 'ui/Select',
    component: Select,
    argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const DefaultModal = Template.bind({})
DefaultModal.args = {}
