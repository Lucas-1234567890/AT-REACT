import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NovoClube({ onAdicionar }) {
  const [nome, setNome] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim()) return;
    onAdicionar({ nome });
    setNome('');
  }

  return (
    <div>
      <h2>Adicionar Novo Clube</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do clube"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">Adicionar</button>
            <NavLink
                to="/"
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? 'blue' : 'inherit' })}
            >
                Voltar a para a lista
            </NavLink>
      </form>
    </div>
  );
}

export default NovoClube;