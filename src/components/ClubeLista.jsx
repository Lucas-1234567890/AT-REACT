import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function ClubeLista({ clubes, onExcluir }) {
  const [confirmarId, setConfirmarId] = useState(null);

  return (
    <div>
      <div className="page-header">
        <h1>📚 Clubes de Leitura</h1>
        <p className="page-subtitle">Gerencie e explore os clubes cadastrados</p>
      </div>

      {clubes.length === 0 ? (
        <p className="lista-vazia">Nenhum clube cadastrado ainda.</p>
      ) : (
        <ul>
          {clubes.map((clube) => (
            <li key={clube.id}>
              <Link to={`/clube/${clube.id}`}>{clube.nome}</Link>
              <button
                className="btn-excluir"
                onClick={() => setConfirmarId(clube.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}

      {confirmarId && (
        <div className="modal-confirmacao">
          <p>Deseja excluir este clube?</p>
          <div className="modal-acoes">
            <button
              className="btn-confirmar"
              onClick={() => { onExcluir(confirmarId); setConfirmarId(null); }}
            >
              Sim, excluir
            </button>
            <button className="btn-secondary" onClick={() => setConfirmarId(null)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="nav-actions" style={{ marginTop: 24 }}>
        <NavLink
          to="/adicionar"
          className="btn-add"
        >
          + Novo Clube
        </NavLink>
      </div>
    </div>
  );
}

export default ClubeLista;