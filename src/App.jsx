import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ClubeLista from './components/ClubeLista';
import NovoClube from './components/NovoClube';
import DetalhesClube from './components/DetalhesClube';

function App() {
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    fetch('/clubes.json')
      .then((r) => r.json())
      .then((data) => setClubes(data));
  }, []);

  function adicionarClube(novoClube) {
    setClubes([...clubes, { id: Date.now(), ...novoClube }]);
  }

  function excluirClube(id) {
    setClubes(clubes.filter((c) => c.id !== id));
  }

  return (
    <Routes>
      <Route index element={<ClubeLista clubes={clubes} onExcluir={excluirClube} />} />
      <Route path="/adicionar" element={<NovoClube onAdicionar={adicionarClube} />} />
      <Route path="/clube/:id" element={<DetalhesClube clubes={clubes} />} />
    </Routes>
  );
}

export default App;