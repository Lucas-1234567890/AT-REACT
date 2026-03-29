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
    <div className="descricao-wrap">
      <div
        ref={ref}
        style={{
          maxHeight: expandido ? altura : 48,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          color: 'var(--text)',
          lineHeight: '1.6',
        }}
      >
        {texto}
      </div>
      <button className="btn-expandir" onClick={() => setExpandido(!expandido)}>
        {expandido ? '▲ Ver menos' : '▼ Ver mais'}
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
      <Link to="/" className="link-back">← Voltar para a lista</Link>

      <div className="clube-detalhes">
        <h2>{clube.nome}</h2>
        <DescricaoExpansivel texto={clube.descricao} />

        <div className="nav-actions">
          <Link to="sessoes" className="btn-add">
            📖 Ver Sessões
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default DetalhesClube;