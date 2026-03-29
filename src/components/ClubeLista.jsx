import { useState, useEffect } from 'react';

function ClubeLista() {
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    fetch('/clubes.json')
      .then((res) => res.json())
      .then((data) => setClubes(data));
  }, []);

  return (
    <div>
      <h1>Clubes de Leitura</h1>
      <ul>
        {clubes.map((clube) => (
          <li key={clube.id}>{clube.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClubeLista;