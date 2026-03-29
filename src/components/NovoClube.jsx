import { useState } from 'react';

function NovoClube() {
  const [nome, setNome] = useState('');

  return (
    <div>
      <h2>Adicionar Novo Clube</h2>
      <form>
        <input
          type="text"
          placeholder="Nome do clube"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default NovoClube;