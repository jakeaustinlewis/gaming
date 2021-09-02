/* eslint-disable react/prop-types */
import React from 'react';
import useAppContext from '../app';

const Turn = ({ children }) => {
	const { xTurn } = useAppContext();

	return (
		<div>
			{ xTurn ? (
				<div>Next player: X</div>
			) : (
				<div>Next player: Y</div>
			)}
			{children}
		</div>
	);
};

export default Turn;
