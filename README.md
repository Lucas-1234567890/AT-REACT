# 📚 Clubes de Leitura — AT React

Aplicação web desenvolvida como Atividade Avaliativa da disciplina de React. O projeto simula um sistema de gerenciamento de clubes de leitura, evoluindo progressivamente em 16 tarefas que cobrem os principais conceitos do React moderno.

---

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 🗂 Estrutura de pastas

```
AT-REACT/
├── public/
│   └── clubes.json          ← dados mock (simula uma API)
├── src/
│   ├── components/
│   │   ├── ClubeLista.jsx   ← página principal com lista
│   │   ├── NovoClube.jsx    ← formulário de adição
│   │   ├── DetalhesClube.jsx ← página de detalhes + descrição expansível
│   │   └── SessoesClube.jsx  ← rota aninhada com sessões do clube
│   ├── context/
│   │   └── ClubesContext.jsx ← estado global com Context API + useReducer
│   ├── App.jsx              ← roteamento central
│   ├── main.jsx             ← entrada da aplicação
│   └── index.css            ← estilos globais
```

---

## 📋 Tarefas implementadas

### Tarefa 1 — Estrutura básica do componente
Criação do componente funcional `ClubeLista` com título e lista vazia (`<ul>`).  
**Conceito:** componente funcional, JSX.

---

### Tarefa 2 — Estado e consumo de dados da API
Uso de `useState` para armazenar a lista e `useEffect` para buscar `clubes.json` com `fetch` na montagem do componente.  
**Conceito:** hooks de estado e efeito, ciclo de vida com `useEffect(fn, [])`.

---

### Tarefa 3 — Formulário para adicionar clubes
Componente `NovoClube` com campo de texto controlado via `useState`.  
**Conceito:** formulário controlado, estado local.

---

### Tarefa 4 — Integração formulário ↔ lista
Função `adicionarClube` criada no `ClubeLista` e passada como prop para `NovoClube`. O submit chama a prop, atualiza o estado e limpa o campo.  
**Conceito:** comunicação pai → filho via props, elevação de estado.

---

### Tarefa 5 — Navegação com React Router
Instalação e configuração do React Router 7. Criação de duas rotas: `index` (lista) e `/adicionar` (formulário).  
**Conceito:** roteamento SPA, `<Routes>`, `<Route>`, `<BrowserRouter>`.

---

### Tarefa 6 — Links de navegação
Adição de `<Link>` nos componentes para navegar entre páginas sem recarregar o browser.  
**Conceito:** `Link` do React Router, navegação client-side.

---

### Tarefa 7 e 8 — Exclusão de itens com atualização de estado
Botão "Excluir" em cada item. Função que filtra o array pelo `id`, removendo o clube e provocando re-renderização automática.  
**Conceito:** imutabilidade de estado, `filter`, re-renderização reativa.

---

### Tarefa 9 — NavLink com feedback visual
Substituição de `Link` por `NavLink` no menu. O link ativo recebe estilo diferente via prop de função `style={({ isActive }) => ...}`.  
**Conceito:** `NavLink`, estado ativo de rota.

---

### Tarefa 10 — Rota dinâmica e useParams
Rota `/clube/:id` que renderiza `DetalhesClube`. O componente usa `useParams()` para capturar o `id` da URL e encontrar o clube no estado.  
**Conceito:** parâmetros de rota, `useParams`.

---

### Tarefa 11 — Validação em tempo real
Lógica derivada do estado: `erro` só aparece se o usuário começou a digitar e tem menos de 3 chars. Botão desabilitado enquanto inválido.  
**Conceito:** estado derivado, UX de validação progressiva.

---

### Tarefa 12 — useReducer no lugar de useState
Estado dos clubes migrado de `useState` para `useReducer` com ações tipadas: `CARREGAR`, `ADICIONAR`, `EXCLUIR`.  
**Conceito:** `useReducer`, padrão reducer/action para estado complexo.

---

### Tarefa 13 — Rotas aninhadas
Rota `/clube/:id/sessoes` aninhada dentro da rota de detalhes. `DetalhesClube` usa `<Outlet />` para renderizar `SessoesClube` dentro da mesma página.  
**Conceito:** rotas aninhadas, `<Outlet>`.

---

### Tarefa 14 — useLayoutEffect
Componente `DescricaoExpansivel` usa `useLayoutEffect` para medir a altura real do conteúdo antes da pintura, permitindo animação de expand/collapse sem flickering.  
**Conceito:** `useLayoutEffect` vs `useEffect` — executa de forma síncrona antes do paint.

---

### Tarefa 15 — Exclusão com confirmação interativa
Clique em "Excluir" armazena o `id` em estado local. Um modal de confirmação aparece, e a exclusão só ocorre após confirmação do usuário.  
**Conceito:** UX para ações destrutivas, estado de UI local.

---

### Tarefa 16 — Context API + useReducer global
Criação de `ClubesContext` com `createContext`, `useReducer` e `useEffect`. O `ClubesProvider` envolve toda a aplicação no `main.jsx`, disponibilizando `clubes` e `dispatch` via hook `useClubes()` para qualquer componente, sem prop drilling.  
**Conceito:** Context API, eliminação de prop drilling, arquitetura escalável.

---


---

## 🛠 Stack

- React 19
- React Router DOM 7
- Vite 8
- CSS puro (sem framework)
