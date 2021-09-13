import React from 'react';
import Square from '../../square';
import useAppContext from '../../app';

const Row = ({ rowPosition }) => {
	const { history, step } = useAppContext();
	const current = history[step];
	const { matrix } = current;

	return (
		<div className='d-flex'>
			{matrix.map((square, index) => {
				return <Square position={[rowPosition, index]} key={index} />;
			})}
		</div>
	);
};

const Board = () => {
	const { history, step } = useAppContext();
	const current = history[step];
	const { matrix } = current;

	return (
		<div>
			<div>
				{matrix.map((row, index) => {
					return <Row rowPosition={index} key={index} />;
				})}
			</div>
			{/* <History /> */}
			{/* <Restart /> */}
		</div>
	);
};

export default Board;
