import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Modal from './Modal'

export default {
  title: 'ui/Modal',
  component: Modal,
  argTypes: {}
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const DefaultModal = Template.bind({})
DefaultModal.args = {}
