import React from 'react';
import Square from '../../square';
import useAppContext from '../../app';

const Row = ({ rowPosition }) => {
	const { matrix } = useAppContext();

	return (
		<div className='d-flex'>
			{matrix.map((square, index) => {
				return <Square position={[rowPosition, index]} key={index} />;
			})}
		</div>
	);
};

const Board = () => {
	const { matrix } = useAppContext();

	return (
		<div>
			{matrix.map((row, index) => {
				return <Row rowPosition={index} key={index} />;
			})}
		</div>
	);
};

export default Board;
