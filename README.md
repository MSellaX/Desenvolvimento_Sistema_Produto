# 📎E.COMMERCE

Aplicação API  desenvolvida como **Single Page Application (SPA)** utilizando **Vite** e consumindo dados da **HP API**.

Permite voce adicionar produtos ao seu carrinho, com suporte a **paginação** e **carrinho** no navegador. 

**Projeto desenvolvido para aulas de front-end e back-end.**

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
git clone https://github.com/MSellaX/Desenvolvimento_Sistema_Produto.git
```

### 2. Rodar em ambiente de desenvolvimento
```bash
npm run dev
```

### 3. Gerar build de produção
```bash
npm run build
```

### 4. Visualizar build
```bash
npm run preview
```

## 📁 Estrutura do projeto
```pgsql
📦 E.COMMERCE
 ┣ 📂 back-end
 ┃ ┣ 📂docs
 ┃ ┃ ┗ 📜 README.md
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 config
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📂 enums
 ┃ ┃ ┣ 📂 middlewares
 ┃ ┃ ┣ 📂 models
 ┃ ┃ ┣ 📂 repositories
 ┃ ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📂 utils
 ┃ ┃ ┗ 📜 sever.js
 ┃ ┣ 📜 .env
 ┃ ┣ 📓 .gitignore
 ┃ ┣ 📜 package.
 ┣ 📂 front-end
 ┃ ┣ 📂 public
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📂 layout
 ┃ ┃ ┃ ┣ 📂 personagem
 ┃ ┃ ┃ ┗ 📂 shared
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┃ ┗ 📂 personagem
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┃ ┗ 📂 personagem
 ┃ ┃ ┣ 📂 storage
 ┃ ┃ ┃ ┗ 📂 personagem
 ┃ ┃ ┣ 📜 main.js
 ┃ ┃ ┗ 📜 style.css
 ┃ ┣ 📓 .gitignore
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 package-lock.json
 ┃ ┗ 📜 packge.json
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
- 📝 Listagem de produtos;
- 👁️Consulta de produto por ID;
- 🗞️Cadastro, edição e remoção de produtos;
- ✏️Registro de pedidos enviados pelo front-end;
- 🔍Consulta de pedidos cadastrados;
- 🔣Cálculo automático do valor total da compra;
- ✅Validação de estoque durante a finalização do pedido;
