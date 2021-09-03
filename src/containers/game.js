import React from 'react';
import Turn from '../components/turn';
import Board from '../components/presentations/board';

const GameContainer = () => {
	return (
		<div className='min-vh-100 mt-4 d-flex justify-content-center'>
			<Turn>
				<Board />
			</Turn>
		</div>
	);
};

export default GameContainer;
