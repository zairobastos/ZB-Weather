import Days from './Days';

import '../styles/week.scss';

function Week() {
    return (
        <div className="semana">
            <Days/>
            <Days class="disable"/>
            <Days class="disable"/>
        </div>
    );
}

export default Week;