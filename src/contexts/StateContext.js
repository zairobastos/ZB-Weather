import {createContext, useContext, useReducer} from 'react';

const initialStates = {
    city: '',
    temp:{
        celsius:'',
        fahrenheit: ''
    },
    clima:{
        chuva:'',
        umidade:'',
        vento:''
    },
    date:{
        dia:'',
        hora:''
    },
    previsao:'',
    hours_temp:[],
    week:{
        day:[],
        temp_max:[],
        temp_min:"20º"
    },
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'setWeek':
            let temp = {...state.week};
            temp.temp_min = action.temp_min;
            return {...state, week: temp};
        break;
        default:
            <h1>Houve um erro!</h1>
        break;
    }

    return state;
}


export const SeacherContext = createContext();

export const StateProvider = ({children, value}) =>(
    <SeacherContext.Provider value={useReducer(reducer,initialStates)}>
        {children}
    </SeacherContext.Provider>
);
export const useStateValue = () => useContext(SeacherContext);