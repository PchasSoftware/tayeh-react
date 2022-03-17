import React, { FC } from 'react';
import { RatingProps } from './Rating.types';
import '../../style/components/card.scss';
// import Button from '../button/Button';
import { generateStars } from './Rating.utils';

const Rating: FC<RatingProps> = ({
	value,
	readonly,
	disabled,
	tyClass,
	activeColor,
	defaultColor,
	onChange,
	max,
	children,
}) => {
	const stars = generateStars({
		disabled,
		activeColor: activeColor || 'rating',
		defaultColor: defaultColor || 'border',
		max: max || 5,
		onChange: (value) => {
			if (onChange && !disabled && !readonly) onChange(value);
		},
	});
	return (
		<div
			className={`ty-flex ty-gap-1 ${tyClass} ${
				disabled ? 'ty-opacity-50' : ''
			}`}
		>
			{stars(value || 0)}
			{children}
		</div>
	);
};

export default Rating;
