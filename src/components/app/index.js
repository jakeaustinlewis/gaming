import React, {
	createContext, useState, useContext,
} from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [xTurn, setXTurn] = useState(true);
	const [hasWon, setHasWon] = useState(null);
	const [history, setHistory] = useState([{ matrix: Array(3).fill(Array(3).fill('')) }]);
	const [step, setStep] = useState(0);

	return (
		<AppContext.Provider
			value={{
				xTurn,
				setXTurn,
				history,
				setHistory,
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

const useAppContext = () => useContext(AppContext);

export default useAppContext;
