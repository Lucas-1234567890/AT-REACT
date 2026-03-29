import { useState, useEffect } from 'react';
import NovoClube from './NovoClube';
import { NavLink } from 'react-router-dom';


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

  function excluirClube(id) {
  setClubes(clubes.filter((c) => c.id !== id));
  }

  
  return (
    <div>
      <h1>Clubes de Leitura</h1>
      <ul>
        {clubes.map((clube) => (
          <li key={clube.id}>
            {clube.nome}
            <button onClick={() => excluirClube(clube.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      {/* <NovoClube onAdicionar={adicionarClube} /> */}
      <NavLink
        to="/adicionar"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? 'blue' : 'inherit' })}
      >
        + Adicionar Clube
      </NavLink>
    </div>
  );
}

export default ClubeLista;