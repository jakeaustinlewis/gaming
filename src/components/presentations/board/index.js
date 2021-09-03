import React from 'react';
import Square from '../../square';
import useAppContext from '../../app';

const Row = ({ rowPosition }) => {
	const { cols } = useAppContext();

	return (
		<div className='d-flex'>
			{cols.map((square, index) => {
				return <Square position={[rowPosition, index]} key={index} />;
			})}
		</div>
	);
};

const Board = () => {
	const { cols } = useAppContext();

	return (
		<div>
			{cols.map((row, index) => {
				return <Row rowPosition={index} key={index} />;
			})}
		</div>
	);
};

export default Board;
