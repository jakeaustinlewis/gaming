/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import useAppContext from '../app';

const Square = ({ value, position }) => {
	const {
		matrix, setMatrix, xTurn, setXTurn,
	} = useAppContext();
	const [row, col] = position;

	const handleTurn = () => {
		const newRow = [...matrix[row]];
		const turn = xTurn ? 'X' : 'O';

		if (newRow[col]) return;
		newRow.splice(col, 1, turn);
		matrix[row] = newRow;
		setMatrix([...matrix]);
		setXTurn(!xTurn);

		// const newMatrix = [...matrix];
		// newMatrix[row][col] = xTurn ? 'X' : 'O';
		// setMatrix(newMatrix);
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
			{matrix[row][col]}
		</button>
	);
};

export default Square;
