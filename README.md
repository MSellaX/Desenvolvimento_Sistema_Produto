# 🧙‍♂️ Harry Potter Explorer

Aplicação Front-End desenvolvida como **Single Page Application (SPA)** utilizando **Vite** e consumindo dados da **HP API**.

Permite explorar personagens do universo *Harry Potter*, com suporte a **paginação** e **favoritos persistidos** no navegador. 

**Projeto desenvolvido para aulas de front-end.**

## 🚀 Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=black)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-purple?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 🌐 API utilizada

https://hp-api.onrender.com/

## 📦 Instalação e execução

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/harry-potter-explorer.git
```

### 2. Instalar dependências
```bash
cd harry-potter-explorer
npm install
```

### 3. Rodar em ambiente de desenvolvimento
```bash
npm run dev
```

### 4. Gerar build de produção
```bash
npm run build
```

### 5. Visualizar build
```bash
npm run preview
```

## 📁 Estrutura do projeto
```pgsql
📦 E.COMMERCE
 ┣ 📂 Back-End
 ┣ docs
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 layout
 ┃ ┃ ┣ 📂 personagem
 ┃ ┃ ┣ 📂 shared
 ┃ ┃ ┗ 📂 ui
 ┃ ┣ 📂 config
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 services
 ┃ ┣ 📂 storage
 ┃ ┣ 📜 main.js
 ┃ ┗ 📜 style.css
 ┣ 📜 index.html
 ┗ 📜 README.md
```

## 🧠 Arquitetura do Projeto

| Pasta / Arquivo | Responsabilidade |
|---|---|
| `components/` | Componentes reutilizáveis da interface, organizados por contexto. |
| `pages/` | Responsável pelas telas da aplicação (SPA). |
| `services/` | Camada de comunicação com APIs. |
| `storage/` | Responsável pelo armazenamento local. |
| `config/` | Centraliza configurações globais da aplicação. |
| `main.js` | Ponto de entrada da aplicação. |
| `style.css` | Estilos globais da aplicação. |

## ✨ Funcionalidades
- 🔍 Listagem de personagens;
- 📄 Paginação dinâmica;
- ⭐ Sistema de favoritos;
- 💾 Persistência no navegador;
- ⚡ Interface rápida com Vite;

## 🚧 Melhorias futuras

Algumas evoluções planejadas para o projeto:

- [ ] Migrar para React;
- [ ] Adicionar modo escuro (dark mode);
- [ ] Animações suaves na troca de páginas;
- [ ] Filtros (casa, espécie, gênero, etc.);
- [ ] Ordenação (nome, casa, etc.);