import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { CardProps } from './Card.types';
import Card from './Card';
import Button from '../button/Button';

export default {
	title: 'Tayeh/Card',
	component: Card,
	argTypes: {},
} as Meta<typeof Card>;

const Template: Story<CardProps> = (args) => (
	<Card {...args}>
		<div>Card Content</div>
		<Button children="Button" />
	</Card>
);
const DarkTemplate: Story<CardProps> = (args) => (
	<div className="dark-theme">
		<div
			className="full-width ty-bg-light p-4"
			style={{ width: '500px', height: '500px' }}
		>
			<Card {...args}>
				<div className="ty-color-text">Card Content</div>
				<Button children="Button" />
			</Card>
		</div>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	tyClass: 'p-4',
};

export const Color = Template.bind({});
Color.args = {
	color: 'primary',
	radius: 10,
	tyClass: 'p-2',
	children: 'Card Content',
};

export const Padding = Template.bind({});
Padding.args = {
	tyClass: 'p-5',
	children: 'Card Content',
};

export const DarkTheme = DarkTemplate.bind({});
DarkTheme.args = {
	tyClass: 'p-5',
	children: 'Card Content',
};
