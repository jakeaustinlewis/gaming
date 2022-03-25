import React from 'react';
import useAppContext from '../app';

const Restart = () => {
	const {
		setStep, setXTurn, setHasWon, setHistory,
	} = useAppContext();

	const handleRestart = () => {
		setXTurn(true);
		setHasWon(null);
		setHistory([{ matrix: Array(3).fill(Array(3).fill('')) }]);
		setStep((prevStep) => prevStep - 1);
		setStep(0);
	};

	return (
		<div className='d-flex justify-content-center'>
			<button
				type='button'
				onClick={handleRestart}
			>
				Restart
			</button>
		</div>
	);
};

export default Restart;
