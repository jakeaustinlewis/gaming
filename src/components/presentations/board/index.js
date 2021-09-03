import React from 'react';
import Square from '../../square';
import useAppContext from '../../app';

const Row = () => {
	const { cols } = useAppContext();

	return (
		<div>
			{cols.map((square) => {
				return <Square />;
			})}
		</div>
	);
};

const Board = () => {
	const { cols } = useAppContext();

	return (
		<>
			{cols.map((row) => {
				return <Row />;
			})}
		</>
	);
};

export default Board;
