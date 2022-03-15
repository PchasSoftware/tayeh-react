import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import Button from './Button';
import { unmountComponentAtNode } from "react-dom";

describe('Running Test for Tayeh Button', () => {
	let container: HTMLDivElement;
	beforeEach(() => {
	  // setup a DOM element as a render target
	  container = document.createElement("div");
	  document.body.appendChild(container);
	});

	afterEach(() => {
	  // cleanup on exiting
	  unmountComponentAtNode(container);
	  container.remove();
	});
	test('Check Button Disabled', () => {
		render(<Button disabled>Tayeh button</Button>);
		expect(screen.getByRole('button', { name: 'Tayeh button' })).toBeDisabled();
	});
	test('Check Button Label', () => {
		render(<Button children="Tayeh button"/>);
		expect(screen.getByRole('button', { name: 'Tayeh button' })).toBeDefined();
	});
	test('Check Button Clear', () => {
		render(<Button layout='clear' children="Tayeh button"/>);
		const node = screen.queryByRole('button', { name: 'Tayeh button' });
		expect(node?.className).toContain('clear');
	});
	test('Check Button Outline', () => {
		render(<Button layout='outline' children="Tayeh button"/>);
		const node = screen.queryByRole('button', { name: 'Tayeh button' });
		expect(node?.className).toContain('outline');
	});
	test('Check Button TyClass', () => {
		render(<Button tyClass='test-class' children="Tayeh button"/>);
		const node = screen.queryByRole('button', { name: 'Tayeh button' });
		expect(node?.className).toContain('test-class');
	});

	test('Check Button with onClick', () => {
		const spy = jest.fn();
		render(<Button onClick={spy} children="Tayeh button"/>);
		const node = screen.queryByRole('button', { name: 'Tayeh button' });
		node?.click();
		expect(spy).toBeCalled();
	});
});
