import React from 'react';

import './styles.css';

export default function Footer() {
  return (
    //  <footer className="footer">
      <div className="link">
        <p>Informações de como se cuidar, acesse:</p>
        <div className="links">
          <a href="https://saude.gov.br/" target='__blank'>Ministério da Saúde</a>
          <a href="https://www.who.int/" target='__blank'>Organização Mundial da Saúde</a>
        </div>
      </div>
    //  </footer>
    )
};
