import React from 'react';
import Turn from '../components/turn';
import Board from '../components/presentations/board';

const GameContainer = () => {
	return (
		<div className='min-vh-100 d-flex flex-column'>
			<Turn>
				<Board />
			</Turn>
		</div>
	);
};

export default GameContainer;
