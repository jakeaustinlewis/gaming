/* eslint-disable react/prop-types */
import React from 'react';
import useAppContext from '../app';

const Turn = ({ children, winner }) => {
	const { xTurn } = useAppContext();

	return (
		<div>
			{ winner ? (
				<div className='mb-2'>
					Winner is:
					{' '}
					{winner}
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
