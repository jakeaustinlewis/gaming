import React, { useEffect } from 'react';
import Turn from '../components/turn';
import Board from '../components/presentations/board';
import useAppContext from '../components/app';

const GameContainer = () => {
	const {
		history, setHistory, xTurn, setXTurn, hasWon, setHasWon, step,
	} = useAppContext();
	const current = history[step];
	const { matrix } = current;

	const waysToWin2 = (() => {
		const winVariations = [];
		const winVariationLeftDiag = [];
		const winVariationRightDiag = [];
		for (let i = 0; i < matrix.length; i++) {
			const winVariationRow = [];
			const winVariationCol = [];
			for (let j = 0; j < matrix.length; j++) {
				winVariationRow.push([i, j]);
				winVariationCol.push([j, i]);
			}
			winVariations.push(winVariationRow);
			winVariations.push(winVariationCol);
			winVariationLeftDiag.push([i, i]);
			winVariationRightDiag.push([matrix.length - i - 1, i]);
		}
		winVariations.push(winVariationLeftDiag);
		winVariations.push(winVariationRightDiag);

		return winVariations;
	})();

	useEffect(() => {
		for (let i = 0; i < waysToWin2.length; i++) {
			const allEqual = waysToWin2[i].every((move) => {
				const [row, col] = move;
				const [fistRow, firstCol] = waysToWin2[i][0];

				// places on board need to have a value
				// if (!matrix[row][col] || !matrix[fistRow][firstCol]) return false;

				// check if values are the same
				return !!matrix[row][col] && matrix[row][col] === matrix[fistRow][firstCol];
			});
			if (allEqual) {
				const [firstRow, firstCol] = waysToWin2[i][0];
				const winner = matrix[firstRow][firstCol];
				return setHasWon(winner);
			}
		}

		let draw = true;

		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix.length; j++) {
				if (!matrix[i][j]) draw = false;
			}
		}
		if (draw) return setHasWon('draw');
	}, [history]);

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
		[
			[0, 0], [1, 1], [2, 2],
		],
		[
			[2, 0], [1, 1], [0, 2],
		],
	];

	return (
		<div className='min-vh-100 mt-4 d-flex justify-content-center'>
			<Turn>
				<Board />
			</Turn>
		</div>
	);
};

export default GameContainer;
