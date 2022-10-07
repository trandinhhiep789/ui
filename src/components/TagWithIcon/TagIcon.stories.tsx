import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TagIcon from './TagIcon'

export default {
    title: 'ui/TagIcon',
    component: TagIcon,
    argTypes: {}
} as ComponentMeta<typeof TagIcon>

const Template: ComponentStory<typeof TagIcon> = args => <TagIcon {...args} />

export const DefaultModal = Template.bind({})
DefaultModal.args = {}
