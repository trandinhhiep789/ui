import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tooltips from './Tooltips'

export default {
    title: 'ui/Tooltips',
    component: Tooltips,
    argTypes: {}
} as ComponentMeta<typeof Tooltips>

const Template: ComponentStory<typeof Tooltips> = args => <Tooltips {...args} />

export const DefaultModal = Template.bind({})
DefaultModal.args = {}
