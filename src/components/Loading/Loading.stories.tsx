import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Loading from './Loading'

export default {
    title: 'ui/Loading',
    component: Loading,
    argTypes: {}
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = args => <Loading {...args} />

export const DefaultLoading = Template.bind({})
DefaultLoading.args = {}
