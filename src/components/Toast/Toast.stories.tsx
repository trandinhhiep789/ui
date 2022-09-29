import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Toast from './Toast'

export default {
    title: 'ui/Toast',
    component: Toast,
    argTypes: {}
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = args => <Toast {...args} />

export const DefaultToast = Template.bind({})
DefaultToast.args = {}
