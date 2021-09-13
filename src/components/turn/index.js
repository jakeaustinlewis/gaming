/* eslint-disable react/prop-types */
import React from 'react';
import useAppContext from '../app';

const Turn = ({ children }) => {
	const { xTurn, hasWon } = useAppContext();

	return (
		<div>
			{ hasWon ? (
				<div className='mb-2'>
					Winner is:
					{' '}
					{hasWon}
				</div>
			) : (
				<div>
					{ xTurn ? (
						<div className='mb-2'>Next player: X</div>
					) : (
						<div className='mb-2'>Next player: O</div>
					)}
				</div>
			)}

			{children}
		</div>
	);
};

export default Turn;
// Mathrew will be an advicate
// within 24-48 hours

// Use context
// what is scope

// memasation
// atomic design methology
