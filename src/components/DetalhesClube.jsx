import { useParams, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function DetalhesClube({ clubes }) {
  const { id } = useParams();
  const clube = clubes.find((c) => c.id === Number(id));

  if (!clube) return <p>Clube não encontrado.</p>;

  return (
    <div>
      <h2>{clube.nome}</h2>
      <p>{clube.descricao}</p>
      <Link to="sessoes">Ver Sessões</Link>
      <Outlet /> {/* ← SessoesClube renderiza aqui */}
      <Link to="/">← Voltar</Link>
    </div>
  );
}

export default DetalhesClube;