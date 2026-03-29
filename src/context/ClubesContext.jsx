import { createContext, useContext, useReducer, useEffect } from 'react';

const ClubesContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'CARREGAR':   return action.payload;
    case 'ADICIONAR':  return [...state, { id: Date.now(), ...action.payload }];
    case 'EXCLUIR':    return state.filter((c) => c.id !== action.id);
    case 'EDITAR':     return state.map((c) => c.id === action.id ? { ...c, ...action.payload } : c);
    default:           return state;
  }
}

export function ClubesProvider({ children }) {
  const [clubes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch('/clubes.json')
      .then((r) => r.json())
      .then((data) => dispatch({ type: 'CARREGAR', payload: data }));
  }, []);

  return (
    <ClubesContext.Provider value={{ clubes, dispatch }}>
      {children}
    </ClubesContext.Provider>
  );
}

export function useClubes() {
  return useContext(ClubesContext);
}