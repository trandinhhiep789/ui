import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Alert from './Alert'

export default {
    title: 'ui/Alert',
    component: Alert,
    argTypes: {}
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />

export const DefaultModal = Template.bind({})
DefaultModal.args = {}
