import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { ModalProps } from './Modal.types';
import Modal from './Modal';
import Card from '../card/Card';

export default {
	title: 'Tayeh/Modal',
	component: Modal,
	argTypes: {},
} as Meta<typeof Modal>;

const Template: Story<ModalProps> = (args) => 
<div>
	Content behind modal
	<Card color='dark' tyClass='px-2 py-4' children="content of card"/>
	<Modal {...args} />
</div>

export const Color = Template.bind({});
Color.args = {
	color: 'primary',
	visible: true,
	children: <div className='p-4'>Modal Content</div>,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
	fullscreen: true,
	radius: 0,
	visible: true,
	children: <div className='p-4'>Modal Content</div>,
};

export const PreventExit = Template.bind({});
PreventExit.args = {
	fullscreen: true,
	radius: 0,
	visible: true,
	beforeClose: () => false,
	children: <div className='p-4'>Modal Content</div>,
};

export const HideClose = Template.bind({});
HideClose.args = {
	radius: 10,
	visible: true,
	canExit: false,
	children: <div className='p-4'>Modal Content</div>,
};