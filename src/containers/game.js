import React from 'react';
import Turn from '../components/turn';
import Board from '../components/presentations/board';
import useAppContext from '../components/app';

const GameContainer = () => {
	const {
		cols, setCols, xTurn, setXTurn,
	} = useAppContext();

	const waysToWin = [
		[
			[0, 0], [0, 1], [0, 2],
		],
		[
			[1, 0], [1, 1], [1, 2],
		],
		[
			[2, 0], [2, 1], [2, 2],
		],
		[
			[0, 0], [1, 0], [2, 0],
		],
		[
			[0, 1], [1, 1], [2, 1],
		],
		[
			[0, 2], [1, 2], [2, 2],
		],
	];

	const isWon = () => {
		// Check if row by columns!!!
		const won = false;
		for (let i = 0; i < waysToWin.length; i++) {
			const [move1] = waysToWin[i];

			const allEqual = waysToWin[i].every((move) => {
				const [row, col] = move;
				const [fistRow, firstCol] = waysToWin[i][0];

				// places on board need to have a value
				if (!cols[row][col] || !cols[fistRow][firstCol]) return false;

				// check if values are the same
				return cols[row][col] === cols[fistRow][firstCol];
			});
			if (allEqual) {
				const [firstRow, firstCol] = waysToWin[i][0];
				const winner = cols[firstRow][firstCol];
				return winner;
			}
		}
		return null;

		// for (let i = 0; i < waysToWin.length; i++) {
		// 	const [move1] = waysToWin[i];

		// 	for (let j = 0; j < waysToWin[i].length; j++) {
		// 		if (j > 0) {
		// 			if (cols[move1] !== cols[waysToWin[i][j]]) break;
		// 		}
		// 	}

		// 	console.log('won: ', won);
		// }
	};

	const winner = isWon();

	return (
		<div className='min-vh-100 mt-4 d-flex justify-content-center'>
			<Turn winner={winner}>
				<Board />
			</Turn>
		</div>
	);
};

export default GameContainer;
