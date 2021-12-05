import '../styles/days.scss';
import {BsFillCloudSunFill} from 'react-icons/bs';
import moment from 'moment';
import { useStateValue } from '../contexts/StateContext';

export default function Days(props) {
    moment.locale('pt-br');
    let data = moment().format('ddd');

    moment.updateLocale('pt-br',{
        weekdaysShort : ['dom.','seg.','ter.','qua.','qui.','sex.','sáb.']
    })

    const [state] = useStateValue();
    return(
        <>
            <div className={`day ${props.class}`}>
                <h4>{data}</h4>
                <BsFillCloudSunFill className="statusTemp"/> 
                <div className="maxmin">
                    <p>37º</p>
                    <p>{state.week.temp_min}</p>
                </div>
            </div>
        </>
    );
}
