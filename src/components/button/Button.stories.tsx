import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
	title: 'Tayeh/Button',
	component: Button,
	argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	disabled: false,
	children: <span>test</span>
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	disabled: false,
	children: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	children: 'Disabled',
};

export const Small = Template.bind({});
Small.args = {
	disabled: false,
	size: 'small',
	children: 'Small',
	tyClass: 'fs-10 px-2 py-1'
};

export const Medium = Template.bind({});
Medium.args = {
	disabled: false,
	size: 'medium',
	children: 'Medium',
	tyClass: 'fs-12 px-3 py-2'
};

export const Large = Template.bind({});
Large.args = {
	disabled: false,
	size: 'large',
	children: 'Large',
	tyClass: 'fs-16 px-5 py-3'
};

export const Outline = Template.bind({});
Outline.args = {
	disabled: false,
	layout: 'outline',
	size: 'large',
	children: 'Outline',
	width: '100px',
};

export const Clear = Template.bind({});
Clear.args = {
	disabled: false,
	layout: 'clear',
	size: 'large',
	children: 'Clear'
};
