import { useParams } from 'react-router-dom';

function SessoesClube({ clubes }) {
  const { id } = useParams();
  const clube = clubes.find((c) => c.id === Number(id));

  if (!clube) return <p>Clube não encontrado.</p>;

  return (
    <div className="sessoes-card">
      <h3>Sessões de leitura</h3>
      <ul>
        {(clube.sessoes || []).map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default SessoesClube;