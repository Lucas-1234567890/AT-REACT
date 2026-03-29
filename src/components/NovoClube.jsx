import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/">← Voltar para a lista</Link>
      </form>
    </div>
  );
}

export default NovoClube;