import React, { useEffect } from 'react';
import useAppContext from '../app';

const History = () => {
	const {
		history, step, setStep, setXTurn, setHasWon,
	} = useAppContext();

	useEffect(() => {
		setXTurn((step % 2) === 0);
	}, [step]);

	const handleBackInTime = () => {
		if (!step) return;
		setStep((prevStep) => prevStep - 1);
		setHasWon(null);
	};

	const handleForwardInTime = () => {
		if (history.length - 1 === step) return;
		setStep((prevStep) => prevStep + 1);
	};

	return (
		<div className='d-flex justify-content-center'>
			<button
				type='button'
				onClick={handleBackInTime}
			>
				&#8592;
			</button>
			<button
				type='button'
				onClick={handleForwardInTime}
			>
				&#8594;
			</button>
		</div>
	);
};

export default History;
