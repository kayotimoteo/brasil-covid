import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import './styles.css';
import medicine_leftImg from '../../assets/medicine_left.svg';
import medicine_rightImg from '../../assets/medicine_right.svg';
import confirmedImg from '../../assets/confirmed.svg';
import recoverdImg from '../../assets/recovered.svg';
import deathImg from '../../assets/death.svg';


export default function Box() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api.get('country/Brazil').then(response => {
      setCases(response.data["0"]);
    });
  }, []);

  return (
    <div className="boxcontainer">
      <img className="boximg" src={medicine_leftImg} alt="COVID"/>
      <div className="box">
        <p>Confirmados</p>
        <div className="boxitem">
          <img src={confirmedImg} alt="" className="icon"/>
          <div className="count">
            {cases.confirmed}
          </div>
        </div>
      </div>

      <div className="box">
        <p>Recuperados</p>
        <div className="boxitem">
        <img src={recoverdImg} alt="" className="icon"/>
          <div className="count">
          {cases.recovered}
          </div>
        </div>
      </div>

      <div className="box">
        <p>Óbitos</p>
        <div className="boxitem">
        <img src={deathImg} alt="" className="icon"/>
          <div className="count">
          {cases.deaths}
          </div>
        </div>
      </div>
      <img className="boximg" src={medicine_rightImg} alt="COVID"/>
    </div>
   )
}
