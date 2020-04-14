import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Table() {
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    api.get('provinces').then(response => {
      setProvinces(response.data)
      console.log(response.data);
    });
  }, []);

  return(
    <>
    <p className="title">Casos por Estado</p>
    <div className="tableFixHead" id="style-1">
    <table>
      <thead>
        <tr>
          <th>Estados</th>
          <th>Confirmados</th>
          <th>Suspeitos</th>
          <th>Óbitos</th>
        </tr>
      </thead>

      <tbody>
          {provinces.map(province => (
            <tr key={province.uf}>
              <td>{province.state}</td>
              <td>{province.cases}</td>
              <td>{province.suspects}</td>
              <td>{province.deaths}</td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
};