import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function ClubeLista({ clubes, onExcluir }) {
  const [confirmarId, setConfirmarId] = useState(null);

  return (
    <div>
      <h1>Clubes de Leitura</h1>
      <ul>
        {clubes.map((clube) => (
          <li key={clube.id}>
            <Link to={`/clube/${clube.id}`}>{clube.nome}</Link>
            <button onClick={() => setConfirmarId(clube.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {confirmarId && (
        <div style={{ border: '1px solid red', padding: 16 }}>
          <p>Confirmar exclusão?</p>
          <button onClick={() => { onExcluir(confirmarId); setConfirmarId(null); }}>
            Sim, excluir
          </button>
          <button onClick={() => setConfirmarId(null)}>Cancelar</button>
        </div>
      )}

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