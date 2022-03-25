import React from 'react';
import History from '../../history';
import Matrix from '../../matrix';
import Turn from '../../turn';
import Restart from '../../restart';

const Board = () => (
	<div>
		<Turn />
		<Matrix />
		<History />
		<Restart />
	</div>
);

export default Board;
