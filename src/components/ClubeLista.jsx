import { useState, useEffect } from 'react';
import NovoClube from './NovoClube';
import { NavLink, Link } from 'react-router-dom';

function ClubeLista({ clubes, onExcluir }) {
  return (
    <div>
      <h1>Clubes de Leitura</h1>
      <ul>
        {clubes.map((clube) => (
          <li key={clube.id}>
            <Link to={`/clube/${clube.id}`}>{clube.nome}</Link>
            <button onClick={() => onExcluir(clube.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <NavLink
        to="/adicionar"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? 'blue' : 'inherit' })}
      >
        + Adicionar Clube
      </NavLink>
    </div>
  );
}

export default ClubeLista;