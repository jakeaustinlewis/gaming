import React from 'react';
import Square from '../square';
import useAppContext from '../app';

const Row = ({ rowPosition }) => {
	const { history, step } = useAppContext();
	const current = history[step];
	const { matrix } = current;

	return (
		<div className='d-flex'>
			{matrix.map((square, index) => <Square position={[rowPosition, index]} key={index} />)}
		</div>
	);
};

const Matrix = () => {
	const { history, step } = useAppContext();
	const current = history[step];
	const { matrix } = current;

	return (
		<>
			{matrix.map((row, index) => <Row rowPosition={index} key={index} />)}
		</>
	);
};

export default Matrix;
