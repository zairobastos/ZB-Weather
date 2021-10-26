import React from 'react';
import '../styles/tempo.scss'
import {BsFillCloudSunFill} from 'react-icons/bs'

function Tempo() {
    return(
        <>
            <div className="tempo">
                <div className="div1">
                    <BsFillCloudSunFill className="statusTemp"/>
                    <div className="status">
                        <h2>34</h2>
                        <sup>ºC | <span>ºF</span></sup>
                    </div>
                    <div className="clima">
                        <p>Chuva: 0 mm</p>
                        <p>Umidade: 70%</p>
                        <p>Vento: 14 km/h</p>
                    </div>
                </div>
                <div className="cidade">
                    <h3>Hidrolândia, Ceara</h3>
                    <h4>sábado, 15:00</h4>
                    <h4>Nublado</h4>
                </div>
            </div>
        </>
    );
}

export default Tempo;