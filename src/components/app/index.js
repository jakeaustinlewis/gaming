import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [xTurn, setXTurn] = useState(true);
	const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill('')));

	return (
		<AppContext.Provider
			value={{
				xTurn,
				setXTurn,
				matrix,
				setMatrix,
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
