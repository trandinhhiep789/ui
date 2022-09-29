import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Report from './Report'

export default {
    title: 'ui/Report',
    component: Report,
    argTypes: {}
} as ComponentMeta<typeof Report>

const Template: ComponentStory<typeof Report> = args => <Report {...args} />

export const DefaultReport = Template.bind({})
DefaultReport.args = {}
