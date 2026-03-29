import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NovoClube({ onAdicionar }) {
  const [nome, setNome] = useState('');

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
      <NavLink to="/" className="link-back">← Voltar para a lista</NavLink>

      <h2>Adicionar Novo Clube</h2>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do clube (mín. 3 caracteres)"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {erro && <span className="campo-erro">⚠ {erro}</span>}
          <button type="submit" disabled={!valido}>
            Adicionar Clube
          </button>
        </form>
      </div>
    </div>
  );
}

export default NovoClube;