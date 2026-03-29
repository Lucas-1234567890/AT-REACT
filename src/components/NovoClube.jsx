import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NovoClube({ onAdicionar }) {
  const [nome, setNome] = useState('');

  //  validação 
  const erro = nome.trim().length > 0 && nome.trim().length < 3 ? 'Mínimo de 3 caracteres' : '';
  const valido = nome.trim().length >= 3;

  function handleSubmit(e) {
    e.preventDefault();
    if (!valido) return;
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
        {erro && <span style={{ color: 'red' }}>{erro}</span>} {/* ← mensagem de erro */}
        <button type="submit" disabled={!valido}>Adicionar</button> {/* ← desabilitado se inválido */}
        <NavLink
          to="/"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? 'blue' : 'inherit' })}
        >
          Voltar para a lista
        </NavLink>
      </form>
    </div>
  );
}

export default NovoClube;