/* eslint-disable react/prop-types */
import React from 'react';
import useAppContext from '../app';

const Square = ({ position }) => {
	const {
		xTurn, history, setHistory, hasWon, setStep, step,
	} = useAppContext();

	const current = history[step];
	const { matrix } = current;

	const [row, col] = position;

	const handleTurn = () => {
		const newRow = [...matrix[row]];
		const newMatrix = [...matrix];
		const turn = xTurn ? 'X' : 'O';

		// If the user clicks on a square with a value, don't allow the turn
		if (newRow[col]) return;

		// If the game is over, don't allow the turn
		if (hasWon) return;

		// update the state of the board and the history of moves
		newRow.splice(col, 1, turn);
		newMatrix[row] = newRow;

		setHistory((prevHistory) => {
			prevHistory.length = step + 1;
			return prevHistory.concat([{ matrix: [...newMatrix] }]);
		});
		setStep((prevStep) => prevStep + 1);
	};

	return (
		<button
			className='square'
			type='button'
			onClick={handleTurn}
		>
			{matrix[row][col]}
		</button>
	);
};

export default Square;
