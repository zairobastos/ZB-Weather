import {createContext, useContext} from 'react';

export const SeacherContext = createContext();

export const StateProvider = ({children, value}) =>(
    <SeacherContext.Provider value={value}>
        {children}
    </SeacherContext.Provider>
);
export const useStateValue = () => useContext(SeacherContext);