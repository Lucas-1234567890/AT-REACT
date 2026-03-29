import { Routes, Route } from 'react-router-dom';
import ClubeLista from './components/ClubeLista';
import NovoClube from './components/NovoClube';

function App() {
  return (
    <Routes>
      <Route index element={<ClubeLista />} />
      <Route path="/adicionar" element={<NovoClube />} />
    </Routes>
  );
}

export default App;