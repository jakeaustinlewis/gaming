import React from 'react';
import Square from '../square';
import useAppContext from '../app';

const History = () => {
	const { history, step, setStep } = useAppContext();

	const handleBackInTime = () => {
		if (!step) return;
		setStep((prevStep) => {
			return prevStep - 1;
		});
	};

	const handleForwardInTime = () => {
		if (history.length === (step + 1)) return;
		setStep((prevStep) => {
			return prevStep + 1;
		});
	};

	return (
		<div className='d-flex justify-content-center'>
			<button
				type='button'
				onClick={handleBackInTime}
			>
				&larr
			</button>
			<button
				type='button'
				onClick={handleForwardInTime}
			>
				&rarr
			</button>
		</div>
	);
};

export default History;
