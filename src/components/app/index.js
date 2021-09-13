import React, {
	createContext, useState, useContext, useEffect,
} from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [xTurn, setXTurn] = useState(true);
	const [hasWon, setHasWon] = useState(null);
	// const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill('')));
	const [history, setHistory] = useState([{ matrix: Array(3).fill(Array(3).fill('')) }]);
	const [step, setStep] = useState(0);

	return (
		<AppContext.Provider
			value={{
				xTurn,
				setXTurn,
				history,
				setHistory,
				// matrix,
				// setMatrix,
				hasWon,
				setHasWon,
				step,
				setStep,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export default useAppContext;
