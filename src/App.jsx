import { useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ClubeLista from './components/ClubeLista';
import NovoClube from './components/NovoClube';
import DetalhesClube from './components/DetalhesClube';

function reducer(state, action) {
  switch (action.type) {
    case 'CARREGAR':  return action.payload;
    case 'ADICIONAR': return [...state, { id: Date.now(), ...action.payload }];
    case 'EXCLUIR':   return state.filter((c) => c.id !== action.id);
    default:          return state;
  }
}

function App() {
  const [clubes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch('/clubes.json')
      .then((r) => r.json())
      .then((data) => dispatch({ type: 'CARREGAR', payload: data }));
  }, []);

  return (
    <Routes>
      <Route index element={
        <ClubeLista
          clubes={clubes}
          onExcluir={(id) => dispatch({ type: 'EXCLUIR', id })}
        />}
      />
      <Route path="/adicionar" element={
        <NovoClube
          onAdicionar={(novoClube) => dispatch({ type: 'ADICIONAR', payload: novoClube })}
        />}
      />
      <Route path="/clube/:id" element={<DetalhesClube clubes={clubes} />} />
    </Routes>
  );
}

export default App;