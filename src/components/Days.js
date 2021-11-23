import '../styles/days.scss';
import {BsFillCloudSunFill} from 'react-icons/bs';
import moment from 'moment';
import SearcherContext from '../contexts/SeacherContext';
import {useContext} from 'react';


export default function Days(props) {
    moment.locale('pt-br');
    let data = moment().format('ddd');

    moment.updateLocale('pt-br',{
        weekdaysShort : ['dom.','seg.','ter.','qua.','qui.','sex.','sáb.']
    })

    const temp = useContext(SearcherContext);
    return(
        <>
            <div className={`day ${props.class}`}>
                <h4>{data}</h4>
                <BsFillCloudSunFill className="statusTemp"/> 
                <div className="maxmin">
                    <p>37º</p>
                    <p>{temp}</p>
                </div>
            </div>
        </>
    );
}
