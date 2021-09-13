/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import useAppContext from '../app';

const Square = ({ value, position }) => {
	const {
		xTurn, setXTurn, history, setHistory, hasWon, setStep, step,
	} = useAppContext();

	const current = history[step];
	const { matrix } = current;

	const [row, col] = position;

	const handleTurn = () => {
		const newRow = [...matrix[row]];
		const turn = xTurn ? 'X' : 'O';

		if (newRow[col]) return;
		if (hasWon) return;

		newRow.splice(col, 1, turn);
		matrix[row] = newRow;

		setHistory((prevHistory) => {
			// prevHistory.length = step + 1;
			console.log('matrix: ', [{ matrix }]);
			console.log('prevHistory: ', prevHistory);
			// return prevHistory.concat([{ matrix }]);
			return prevHistory.concat(prevHistory);
		});
		setXTurn((step % 2) !== 0);
		setStep((prevStep) => { return prevStep + 1; });

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
