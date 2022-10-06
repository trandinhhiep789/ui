import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tag from './Tag'

export default {
    title: 'ui/Tag',
    component: Tag,
    argTypes: {}
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

export const DefaultModal = Template.bind({})
DefaultModal.args = {}
