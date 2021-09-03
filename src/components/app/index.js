import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [xTurn, setXTurn] = useState(true);
	const [cols, setCols] = useState(Array(3).fill(null));

	return (
		<AppContext.Provider
			value={{
				xTurn,
				setXTurn,
				cols,
				setCols,
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
