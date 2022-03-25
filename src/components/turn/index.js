/* eslint-disable react/prop-types */
import React from 'react';
import useAppContext from '../app';

const Turn = () => {
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
		</div>
	);
};

export default Turn;
