import { useState, useEffect } from 'react';
import NovoClube from './NovoClube';
import { Link } from 'react-router-dom';

function ClubeLista() {
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    fetch('/clubes.json')
      .then((res) => res.json())
      .then((data) => setClubes(data));
  }, []);

  function adicionarClube(novoClube) {
    setClubes([...clubes, { id: Date.now(), ...novoClube }]);
  }

  return (
    <div>
      <h1>Clubes de Leitura</h1>
      <ul>
        {clubes.map((clube) => (
          <li key={clube.id}>{clube.nome}</li>
        ))}
      </ul>
      {/* <NovoClube onAdicionar={adicionarClube} /> */}
      <Link to="/adicionar">+ Adicionar Clube</Link>
    </div>
  );
}

export default ClubeLista;