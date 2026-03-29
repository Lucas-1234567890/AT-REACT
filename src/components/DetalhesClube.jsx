import { useParams, Link, Outlet } from 'react-router-dom';
import { useRef, useLayoutEffect, useState } from 'react';

function DescricaoExpansivel({ texto }) {
  const ref = useRef();
  const [altura, setAltura] = useState(0);
  const [expandido, setExpandido] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      setAltura(ref.current.scrollHeight);
    }
  }, [texto]);

  return (
    <div>
      <div
        ref={ref}
        style={{ maxHeight: expandido ? altura : 40, overflow: 'hidden', transition: 'max-height 0.3s' }}
      >
        {texto}
      </div>
      <button onClick={() => setExpandido(!expandido)}>
        {expandido ? 'Ver menos' : 'Ver mais'}
      </button>
    </div>
  );
}

function DetalhesClube({ clubes }) {
  const { id } = useParams();
  const clube = clubes.find((c) => c.id === Number(id));

  if (!clube) return <p>Clube não encontrado.</p>;

  return (
    <div>
      <h2>{clube.nome}</h2>
      <DescricaoExpansivel texto={clube.descricao} /> {/* ← aqui */}
      <Link to="sessoes">Ver Sessões</Link>
      <Outlet />
      <Link to="/">← Voltar</Link>
    </div>
  );
}

export default DetalhesClube;