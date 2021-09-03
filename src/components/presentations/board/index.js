import React from 'react';
import Square from '../../square';

const board = () => {
	const renderRow = () => {
		return (
			<div>
				<Square />
				<Square />
				<Square />
			</div>
		);
	};

	return (
		<>
			{renderRow()}
			{renderRow()}
			{renderRow()}
		</>
	);
};

export default board;
