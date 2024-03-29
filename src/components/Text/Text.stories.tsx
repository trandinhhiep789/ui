import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from './Text'

export default {
    title: 'ui/Typography',
    component: Text,
    argTypes: {}
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const DefaultText = Template.bind({})
DefaultText.args = {}
