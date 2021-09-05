/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import useAppContext from '../app';

const Square = ({ value, position }) => {
	const {
		cols, setCols, xTurn, setXTurn,
	} = useAppContext();
	const [row, col] = position;

	const handleTurn = () => {
		const newRow = [...cols[row]];
		const turn = xTurn ? 'X' : 'O';

		if (newRow[col]) return;
		newRow.splice(col, 1, turn);
		cols[row] = newRow;
		setCols([...cols]);
		setXTurn(!xTurn);

		// const [...newCol] = [...[...cols]];
		// newCol[row][col] = xTurn ? 'X' : 'O';
		// setCols(cols);
		// setXTurn(!xTurn);
	};

	return (
		<button
			className='square'
			type='button'
			onClick={handleTurn}
		>
			{/* {row}
			{col} */}
			{cols[row][col]}
		</button>
	);
};

export default Square;
